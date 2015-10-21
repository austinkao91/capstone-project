var MapIndex = React.createClass({
  getInitialState: function() {
    return {restaurants: RestaurantStore.all(), markers: []};
  },
  getMapCenter: function() {

    var loc = FilterStore.all().location;
    var locCenter = LocationStore.find_by_location(loc);
    if( Object.keys(locCenter).length === 0) {
      return {lat: 37.7758, lng: -122.435};
    }
  },
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var center = this.getMapCenter();
    var mapOptions = {
      center: center,
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.geoCoder = new google.maps.Geocoder();
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.onChange);
  },
  componentWillUnmount: function() {
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT, this.onChange);
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
          console.log("Looking up location coordinates!")
          this.geoLocationMarker(restaurant);
        } else {
          console.log("I have the location cached!")
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
