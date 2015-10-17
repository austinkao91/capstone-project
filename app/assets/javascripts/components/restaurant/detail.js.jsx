var RestaurantDetail = React.createClass({
  getInitialState: function() {
    return {restaurant: this.getRestaurantState()};
  },
  getRestaurantState: function() {
    return RestaurantStore.find(parseInt(this.props.params.restaurantId));
  },
  update: function() {
    var restaurant = this.getRestaurantState();
    if(Object.keys(restaurant).length > 0) {
      this.setState({restaurant: this.getRestaurantState()});
    } else {
      window.location = "/#";
    }
  },
  componentDidMount: function() {
    ApiUtil.getOne(parseInt(this.props.params.restaurantId));
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.update);
  },
  componentWillUnmount: function() {
    console.log("unmount!");
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT, this.update);
  },
  componentWillReceiveProps: function(nextProps) {
    ApiUtil.getOne(parseInt(nextProps.params.restaurantId));
  },
  render: function() {
    var restaurant = this.state.restaurant;
    var address_line1 = restaurant.street_address;
    var address_line2 = restaurant.city + ", " + restaurant.state + " " + restaurant.zip_code;
    if(Object.keys(restaurant).length > 0) {
      return(
        <div className="restaurant-detail group">
          <div className='restaurant-info'>
            <h2>{this.state.restaurant.title}</h2>
            <RestaurantTagIndex tags={this.state.restaurant.tags} />
            <div className="business-detail">
              {address_line1}
              <br/>
              {address_line2}
              <br/>
              {restaurant.phone_number}
            </div>
          </div>
          <div className='restaurant-reviews'>
            <ReviewIndex restaurant={this.state.restaurant} reviews={this.state.restaurant.reviews}/>
          </div>
        </div>
      );
    } else {
      return <div className="restaurant-detail group"/>;
    }
  }
});
