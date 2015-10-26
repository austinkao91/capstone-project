var RestaurantItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function() {
    var showURL = "restaurants/" + this.props.restaurant.id;
    this.history.pushState(null, showURL);
  },
  averageReview: function() {
    var avg = this.props.restaurant.reviews.reduce(function(accum, review){
      return accum + review.rating;
    }, 0);
    return (avg/this.reviewCount()).toFixed(1);
  },
  reviewCount:function() {
    return this.props.restaurant.reviews.length;
  },
  render: function() {
    var restaurant = this.props.restaurant;
    var address_line1 = restaurant.street_address;
    var address_line2 = restaurant.city + ", " + restaurant.state;
    return(
      <li className={"restaurant-item group"}>
        <div className="item-picture">
          <ImageIndex images={this.props.restaurant.pictures} limit={1}/>
        </div>
        <div className="item-info">
          {this.props.listNum + 1}{". "}&nbsp;<p className="restaurant-title"
                                                onClick={this.showDetail}>
                                                {this.props.restaurant.title}
                                              </p>
          <br/>
          <Rating rating={this.averageReview()}/>&nbsp;&nbsp;{this.reviewCount()}&nbsp;{" reviews"}
          <br/>

          <div className="filter-info">
            <Price price={restaurant.priceRange}/>&nbsp;{"•"}&nbsp;<RestaurantTagIndex tags={restaurant.tags}/>
          </div>
        </div>
        <div className="address">
          {address_line1}
          <br/>
          {address_line2}
          <br/>
        </div>
      </li>
    );
  }
});
