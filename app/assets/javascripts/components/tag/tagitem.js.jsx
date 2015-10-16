var TagItem = React.createClass({
  filterRestaurants: function() {
    console.log("click");
    RestaurantActions.receiveAllRestaurant(this.props.tag.restaurants);
  },
  render: function() {
    return(
      <li onClick={this.filterRestaurants}>
        {this.props.tag.title}({this.props.tag.restaurants.length})
      </li>
    );
  }
});
