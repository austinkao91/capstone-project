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
      <li className={"restaurant-item group"} onClick={this.showDetail}>
        <div className="item-info">
          {this.props.listNum + 1}{". "}{this.props.restaurant.title}
          <br/>

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
