var RestaurantMap = React.createClass({
  getInitialState: function() {
    return {restaurants: RestaurantStore.all(), markers: []};
  },
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.geoCoder = new google.maps.Geocoder();
    this.onChange();
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.onChange);
  },
  componentWillUnmount: function() {
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT, this.onChange);
  },
  clearMarkers: function() {
    this.state.markers.forEach(function(marker) {
      google.maps.event.clearInstanceListeners(marker);
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
          this.map.panTo(new google.maps.LatLng(restaurant.lat, restaurant.lng));
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
      animation: google.maps.Animation.DROP,
      title: restaurant.title
    });
    this.state.markers.push(marker);
    marker.setMap(that.map);
    this.map.panTo(new google.maps.LatLng(lat, lng));
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
  render: function() {
    return  <div className="restaurant-detail-map" ref="map"/>;
  }
});
