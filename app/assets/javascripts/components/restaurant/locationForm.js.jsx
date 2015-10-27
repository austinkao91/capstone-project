var RestaurantLocationForm = React.createClass({
  getInitialState: function() {
    return {
      loading: false,
      street_address: "",
      location_array: [],
      lat: null,
      lng: null,
      checked: false
    };
  },
  componentDidMount: function() {
    if(typeof window.CURRENT_USER_ID === "undefined") {
      window.location = "/session/new";
    }
    this.geoCoder = new google.maps.Geocoder();
  },
  createLocation: function(event) {
    event.preventDefault();
    var title = event.currentTarget[0].value.trim();
    var tag_list = event.currentTarget[1].value;
    var price_range = parseInt(event.currentTarget[2].value);
    var street_address = this.state.street_address;
    var location_array = this.state.location_array;
    if(this.state.checked && title !== "") {
      this.error = null;
      ApiUtil.create({
        title: title,
        street_address: street_address,
        location_array: location_array,
        tag_list: tag_list,
        price_range: price_range
      });
    } else {
      this.error = "Restaurant name cannot be blank!";
      this.setState({});
    }
  },
  submit: function(event) {
    event.preventDefault();
    this.setState({load: true}, this.submitLocation.bind(null, event));
  },
  submitLocation: function(event) {
    var street_address = event.currentTarget[0].value;
    var city = event.currentTarget[1].value;
    var state = event.currentTarget[2].value;
    var loc = {
      address: street_address + " " + city + " " + state
    };
    this.geoCoder.geocode(loc, function(result, status) {
        var latLng;
        if( status === "OK") {
          latLng = result[0].geometry.location;
          var lat = latLng.lat();
          var lng = latLng.lng();
          this.setState({
            loading: false,
            street_address: street_address,
            location_array: [city, state],
            lat: lat,
            lng: lng,
            checked: true
          });
        } else {
          alert("Geocoder was unsuccessful because: " + status);
        }
    }.bind(this));
  },
  render: function() {
    var content;
    var error;
    if(this.error) {
      error = <div className="error-message">{this.error}</div>;
    }
    if(this.state.load) {
      return (
        <div className="restaurant-form-contets">
          <h1>Loading</h1>
        </div>
      );
    }
    if(this.state.checked) {
      content = (
        <div className="restaurant-form-contents">
          <h2>Cool! We found the address</h2>
          <p>{this.state.street_address + " " + this.state.location_array[0] + ", " + this.state.location_array[1] }</p>
          <p>Add more details to the restaurant below</p>
          <div className="restaurant-body-contents">
            <div className="restaurant-form-picture">
              <img src="https://res.cloudinary.com/omnombloop/image/upload/v1445913800/2000px-Restaurant_building_clip_art.svg_pjsx1h.png"/>
            </div>
            <ClickMap street_address={this.state.street_address}
                              location_array={this.state.location_array}
                              lat={this.state.lat}
                              lng={this.state.lng}/>
          {error}
            <RestaurantInfoForm street_address={this.state.street_address}
                              location_array={this.state.location_array}
                              lat={this.state.lat}
                              lng={this.state.lng}
                              onSubmit={this.createLocation}/>

          </div>
        </div>
      );
    } else {
      content= (
        <div className="restaurant-form-contents">
          <h2>Know about a restaurant OMNOMNOM doesn't?</h2>
          <p>Start by filling out the address form below!</p>
          <div className="restaurant-body-contents">
            <LocationField submitLocation={this.submitLocation}/>
            <div className="restaurant-form-picture">
              <img src="https://res.cloudinary.com/omnombloop/image/upload/v1445913800/2000px-Restaurant_building_clip_art.svg_pjsx1h.png"/>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="index group">
          {content}
        </div>
      </div>
    );
  }
});
