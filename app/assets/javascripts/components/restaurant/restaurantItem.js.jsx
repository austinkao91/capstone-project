var RestaurantItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function() {
    var showURL = "restaurants/" + this.props.restaurant.id;
    this.history.pushState(null, showURL);
  },
  render: function() {
    var restaurant = this.props.restaurant;
    var address_line1 = restaurant.street_address;
    var address_line2 = restaurant.city + ", " + restaurant.state + " " + restaurant.zip_code;
    return(
      <li className={"restaurant-item"} onClick={this.showDetail}>
        {"Title: " + this.props.restaurant.title}
        <br/>
        {"Address: " + address_line1}
        <br/>
        {address_line2}
        <br/>
      </li>
    );
  }
});
