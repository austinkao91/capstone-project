var RestaurantDetail = React.createClass({
  getInitialState: function() {
    return {restaurant: this.getRestaurantState(), load: false, showModal: false};
  },
  getRestaurantState: function() {
    return RestaurantStore.find(parseInt(this.props.params.restaurantId));
  },
  modalClick: function(event) {
    event.preventDefault();
    this.setState({showModal: !this.state.showModal});
  },
  load: function(callback) {
    this.setState({load: true}, callback);
  },
  update: function() {
    this.setState({restaurant: this.getRestaurantState()}, this.setState.bind(this, {load: false}));
  },
  componentWillMount: function() {
    ApiUtil.getOne(parseInt(this.props.params.restaurantId));
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.update);
  },
  componentWillUnmount: function() {
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT, this.update);
  },
  averageReview: function() {
    var avg = this.state.restaurant.reviews.reduce(function(accum, review){
      return accum + review.rating;
    }, 0);
    return (avg/this.reviewCount()).toFixed(1);
  },
  reviewCount:function() {
    return this.state.restaurant.reviews.length;
  },
  render: function() {
    var restaurant = this.state.restaurant;
    var address_line1 = restaurant.street_address;
    var address_line2 = restaurant.city + ", " + restaurant.state;
    console.log(this.state.showModal);
    if(this.state.load) {
      return (
        <div className="loading">
          <h1>Loading</h1>
        </div>
      );
    }
    if(Object.keys(restaurant).length > 0) {
      return(
        <div>

          <div className="header group">
            <div className="restaurant-header group">
              <div className="inner-header group">
                <div className="restaurant-title-info">
                  <h2>{this.state.restaurant.title}</h2>
                  <Rating rating={this.averageReview()}/>&nbsp;&nbsp;{this.reviewCount()}&nbsp;{"reviews"}
                  <div className="filter-info">
                    <Price price={this.state.restaurant.priceRange}/>&nbsp;{"•"}&nbsp;<RestaurantTagIndex tags={this.state.restaurant.tags} />
                  </div>
                </div>
                <div className="restaurant-buttons">
                  <CloudinaryUploader id={this.state.restaurant.id} upload="restaurant" />
                </div>
              </div>
              <div className="business-detail">
                <div className="place-info">
                  <RestaurantMap/>
                  <br/>
                  {address_line1}
                  <br/>
                  {address_line2}
                  <br/>
                </div>
                <div className="picture-info">
                  <ImageIndex
                    images={this.state.restaurant.pictures}
                    limit={3}/>
                </div>
              </div>
            </div>
          </div>
          <div className="index group">
            <div className='restaurant-reviews'>
              <ReviewIndex
                restaurant={this.state.restaurant}
                reviews={this.state.restaurant.reviews}/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="header group"/>
          <div className="index group"/>
        </div>
      );
    }
  }
});
