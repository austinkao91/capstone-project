var TagItem = React.createClass({
  filterRestaurants: function() {
    FilterActions.addFilter({tags: this.props.tag.title});
  },
  render: function() {
    return(
      <li onClick={this.filterRestaurants}>
        {this.props.tag.title}({this.props.tag.restaurants.length})
      </li>
    );
  }
});
