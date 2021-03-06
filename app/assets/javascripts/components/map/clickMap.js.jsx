  var ClickMap = React.createClass({
  getInitialState: function() {
    return {markers: []};
  },
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 12
    };
    var locInfo = {
      title: this.props.street_address + " " + this.props.location_array[0] + " " + this.props.location_array[1]
    };

    this.map = new google.maps.Map(map, mapOptions);
    this.placeMarker(this.props.lat, this.props.lng, locInfo);
    google.maps.event.addListener(this.map, 'click', this.onChange);
  },
  clearMarkers: function() {
    this.state.markers.forEach(function(marker) {
      google.maps.event.clearInstanceListeners(marker);
      marker.setMap(null);
    });
    this.setState({coordinates: [], markers: []});
  },
  onChange: function(coord) {
    if(this.state.activated) {
      this.clearMarkers();
      var coordinates = [];
      coordinates.push(coord.latLng.lat());
      coordinates.push(coord.latLng.lng());
      this.setState({coordinates: coordinates}, function() {
        this.getLocation(coord.latLng);
      }.bind(this));
    }
  },
  getLocation: function(latLng) {
    this.geoCoder.geocode({'location': latLng}, function(result,status) {
      this.props.getInfo(result);
    }.bind(this));
  },
  addMarkers: function() {
    if( this.state.coordinates.length > 0 ) {
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
    return  <div className="restaurant-form-map" ref="map"/>;
  }
});
