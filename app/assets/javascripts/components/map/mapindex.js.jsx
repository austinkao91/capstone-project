var MapIndex = React.createClass({
  getInitialState: function() {
    return {restaurants: RestaurantStore.all(), markers: []};
  },
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.geoCoder = new google.maps.Geocoder();
    // RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.onChange);
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
        this.geoLocationMarker(restaurant);

      }.bind(this));
    }
  },
  placeMarker: function(latLng, restaurant) {
    var that = this;
    var pos = {lat: latLng.lat(), lng: latLng.lng()};
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
          this.placeMarker(latLng, restaurant);
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
