var RestaurantDetail = React.createClass({
  getInitialState: function() {
    return {restaurant: this.getRestaurantState()};
  },
  getRestaurantState: function() {
    return RestaurantStore.find(parseInt(this.props.params.restaurantId));
  },
  update: function() {
    this.setState({restaurant: this.getRestaurantState()});
  },
  componentDidMount: function() {
    ApiUtil.getOne(parseInt(this.props.params.restaurantId));
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.update);
  },
  componentWillUnmount: function() {
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT, this.update);
  },
  render: function() {
    var restaurant = this.state.restaurant;
    var address_line1 = restaurant.street_address;
    var address_line2 = restaurant.city + ", " + restaurant.state + " " + restaurant.zip_code;
    if(Object.keys(restaurant).length > 0) {
      return(
        <div className="index group">
          <div className="restaurant-detail group">
            <div className='restaurant-info group'>
              <div className="restaurant-title-info">
                <h2>{this.state.restaurant.title}</h2>
                <RestaurantTagIndex tags={this.state.restaurant.tags} />
                  <CloudinaryUploader id={this.state.restaurant.id} upload="restaurant" />
              </div>
              <div className="business-detail">
                <div className="place-info">
                  <RestaurantMap />
                  {address_line1}
                  <br/>
                  {address_line2}
                  <br/>
                  {restaurant.phone_number}
                </div>
                <div className="picture-info">
                  <ImageIndex images={this.state.restaurant.pictures}/>
                </div>
              </div>
            </div>
            <div className='restaurant-reviews'>
              <ReviewIndex restaurant={this.state.restaurant} reviews={this.state.restaurant.reviews}/>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="restaurant-detail group"/>;
    }
  }
});
