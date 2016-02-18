var MapIndex = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function() {
    return {markers: [], active: [], passive: [], lock: false};
  },

  getMapCenter: function() {
    var loc = FilterStore.all().location;
    var locCenter = LocationStore.find_by_location(loc);
    if( Object.keys(locCenter).length === 0) {
      this.map.setCenter(new google.maps.LatLng(37.7758, -122.435));
    } else {
      if(locCenter.lat === null || locCenter.lng === null) {
        var locationAddress = {address: locCenter.city+ " " + locCenter.state};
        this.getLocationCoordinates(locationAddress, locCenter.id);
      } else {
        var lat = locCenter.lat;
        var lng = locCenter.lng;
        this.map.setCenter(new google.maps.LatLng(lat,lng));
      }
    }
  },
  getLocationCoordinates: function(loc, id){
    this.geoCoder.geocode(loc, function(result, status) {
        var latLng;
        if( status === "OK") {
          latLng = result[0].geometry.location;
          var lat = latLng.lat();
          var lng = latLng.lng();
          ApiUtil.updateLocation(id,  {lat: lat, lng: lng});
          this.map.setCenter(new google.maps.LatLng(lat, lng));
        } else {
          alert("Geocoder was unsuccessful because: " + status);
        }
    }.bind(this));
  },
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.geoCoder = new google.maps.Geocoder();
    FilterStore.addHandler(FilterConstants.CHANGE_EVENT, this.getMapCenter);
    LocationStore.addHandler(LocationConstants.CHANGE_EVENT, this.getMapCenter);
    RestaurantStore.addHandler(RestaurantConstants.HOVER_EVENT, this.getActive);
    window.addEventListener("scroll", this.handleScroll);
  },
  getActive: function() {
    this.setState({active: RestaurantStore.active(), passive: RestaurantStore.passive()});
  },
  componentWillUnmount: function() {
    LocationStore.removeHandler(LocationConstants.CHANGE_EVENT, this.getMapCenter);
    FilterStore.removeHandler(FilterConstants.CHANGE_EVENT, this.getMapCenter);
    RestaurantStore.removeHandler(RestaurantConstants.HOVER_EVENT, this.getActive);
    window.removeEventListener("scroll", this.handleScroll);
  },
  handleScroll: function(event) {
    var node = React.findDOMNode(this);
    if(event.srcElement.body.scrollTop >= 250) {
      this.state.lock = true;
    } else {
      this.state.lock = false;
    }
    this.setState({lock: this.state.lock});

  },
  clearMarkers: function() {
    this.state.markers.forEach(function(marker) {
      google.maps.event.clearInstanceListeners(marker);
      marker.setMap(null);
    });
    this.removeAnimation();
    this.state.markers = [];
    this.state.active = [];
    this.state.passive = [];
    this.setState({
      markers: this.state.markers,
      active: this.state.active,
      passive: this.state.passive
    });
  },
  removeAnimation: function() {
    if(this.state.passive.length > 0) {
      var idx = (this.state.passive[0].listNum - 1) + "";
      var marker = this.state.markers[idx];
      marker.setAnimation(null);
    }
  },
  componentWillReceiveProps: function(nextProps){
    this.clearMarkers();
    this.addMarkers(nextProps);
  },
  addMarkers: function(props) {
    if( props.restaurants ) {
      var restaurants = props.restaurants;
      restaurants.forEach(function(restaurant,marker_id){
        if(restaurant.lat === null || restaurant.lng === null) {
          this.geoLocationMarker(restaurant, marker_id+1);
        } else {
          this.placeMarker(restaurant.lat, restaurant.lng, restaurant, marker_id + 1);
        }
      }.bind(this));
    }
  },
  placeMarker: function(lat, lng, restaurant, marker_id) {
    var that = this;
    var pos = {lat: lat, lng: lng};
    var data = restaurant.title;
    var infowindow = new google.maps.InfoWindow({
      content: restaurant.title
    });
    var marker = new google.maps.Marker({
      position: pos,
      icon: "https://maps.google.com/mapfiles/kml/paddle/" + marker_id + ".png",
      map: that.map,
      animation: google.maps.Animation.DROP,
      title: restaurant.title
    });
    google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(this.map,marker);
    }.bind(this));
    google.maps.event.addListener(marker, 'click', function() {
      var showURL = "restaurants/" + restaurant.id;
      this.history.pushState(null, showURL);
    }.bind(this));
    google.maps.event.addListener(marker, 'mouseout', function() {
      infowindow.close();
    }.bind(this));


    this.state.markers.push(marker);
    this.setState({markers: this.state.markers});
    marker.setMap(that.map);

  },
  geoLocationMarker: function(restaurant, marker_id) {
    var loc = {
      address: restaurant.street_address + " " + restaurant.city + " " + restaurant.state
    };
    this.geoCoder.geocode(loc, function(result, status) {
        var latLng;
        if( status === "OK") {
          latLng = result[0].geometry.location;
          var lat = latLng.lat();
          var lng = latLng.lng();
          ApiUtil.updateRestaurant({id: restaurant.id, restaurant: {lat: lat, lng: lng}});
          this.placeMarker(lat, lng, restaurant, marker_id);
        } else {
          alert("Geocoder was unsuccessful because: " + status);
        }
    }.bind(this));
  },
  hoverBounce: function() {
    if(this.state.active.length > 0) {
      var idx = (this.state.active[0].listNum - 1) + "";
      var marker = this.state.markers[idx];
      var lat = this.state.active[0].lat;
      var lng = this.state.active[0].lng;
      marker.setAnimation(google.maps.Animation.BOUNCE);
      this.map.setCenter(new google.maps.LatLng(lat,lng));
    }

  },
  getBounds: function() {
    var mapBounds = this.map.getBounds();
    var lat = mapBounds.Qa;
    var lng = mapBounds.Ma;

    var bounds ={bounds: {northEast: {lat: lat.j, lng: lng.J}, southWest: {lat: lat.J, lng: lng.j}}};
    filterAction.addFilter(bounds);
  },
  getOffSet: function(){
    var width = window.outerWidth;
    var offset = (980/2-250);
    return {marginLeft: offset};
  },
  mapListener: function() {
    this.getBounds();
  },
  render: function() {
    this.removeAnimation();
    this.hoverBounce();
    var mapLoc;
    var leftOffSet;
    if(this.state.lock) {
      mapLoc = "map-locked";
      // leftOffSet = this.getOffSet();
    } else {
      mapLoc = "map-holder";
    }

    return (
      <div className="map-container">
        <div className={mapLoc} style={leftOffSet}>
          <div className="map" ref="map"/>
        </div>
      </div>
    );
  }
});
