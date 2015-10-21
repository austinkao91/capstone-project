var MapIndex = React.createClass({
  getInitialState: function() {
    return {restaurants: RestaurantStore.all(), markers: []};
  },
  getMapCenter: function() {
    var loc = FilterStore.all().location;
    var locCenter = LocationStore.find_by_location(loc);
    if( Object.keys(locCenter).length === 0) {
      this.map.setCenter(new google.maps.LatLng(37.7758, -122.435));
    } else {
      if(typeof locCenter.lat === "undefined" || typeof locCenter.lng === "undefined") {
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
          console.log(lat + " fetching " + lng)
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
    console.log(mapOptions)
    this.map = new google.maps.Map(map, mapOptions);
    this.geoCoder = new google.maps.Geocoder();
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.onChange);
    FilterStore.addHandler(FilterConstants.CHANGE_EVENT, this.getMapCenter);
    LocationStore.addHandler(LocationConstants.CHANGE_EVENT, this.getMapCenter);
  },
  componentWillUnmount: function() {
    LocationStore.removeHandler(LocationConstants.CHANGE_EVENT, this.getMapCenter);
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT, this.onChange);
    FilterStore.removeHandler(FilterConstants.CHANGE_EVENT, this.getMapCenter);
  },
  clearMarkers: function() {
    this.state.markers.forEach(function(marker) {
      marker.setMap(null);
    });
    this.setState({markers: []});
  },
  onChange: function() {
    this.clearMarkers();
    this.setState( { restaurants: RestaurantStore.all() }, function() {
      this.addMarkers();
    }.bind(this));
  },
  addMarkers: function() {
    if( this.state.restaurants ) {
      var restaurants = this.state.restaurants;
      restaurants.forEach(function(restaurant){
        if(restaurant.lat === null || restaurant.lng === null) {
          this.geoLocationMarker(restaurant);
        } else {
          this.placeMarker(restaurant.lat, restaurant.lng, restaurant);
        }
      }.bind(this));
    }
  },
  placeMarker: function(lat, lng, restaurant) {
    var that = this;
    var pos = {lat: lat, lng: lng};
    var marker = new google.maps.Marker({
      position: pos,
      map: that.map,
      title: restaurant.title
    });
    this.state.markers.push(marker);
    marker.setMap(that.map);
  },
  geoLocationMarker: function(restaurant) {
    var loc = {
      address: restaurant.street_address + " " + restaurant.city
    };
    this.geoCoder.geocode(loc, function(result, status) {
        var latLng;
        if( status === "OK") {
          latLng = result[0].geometry.location;
          var lat = latLng.lat();
          var lng = latLng.lng();
          ApiUtil.updateRestaurant({id: restaurant.id, restaurant: {lat: lat, lng: lng}});
          this.placeMarker(lat, lng, restaurant);
        } else {
          alert("Geocoder was unsuccessful because: " + status);
        }
    }.bind(this));
  },
  getBounds: function() {
    var mapBounds = this.map.getBounds();
    var lat = mapBounds.Qa;
    var lng = mapBounds.Ma;

    var bounds ={bounds: {northEast: {lat: lat.j, lng: lng.J}, southWest: {lat: lat.J, lng: lng.j}}};
    filterAction.addFilter(bounds);
  },
  mapListener: function() {
    this.getBounds();
  },
  render: function() {
    return  <div className="map" ref="map"/>;
  }
});
