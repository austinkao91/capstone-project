var TagItem = React.createClass({
  filterRestaurants: function() {
    FilterActions.toggleFilter({tags: [this.props.tag.title]});
  },
  render: function() {
    return(
      <li className="tag-item">
        <input type="checkbox" onChange={this.filterRestaurants}>{this.props.tag.title}({this.props.tag.restaurants.length})</input>
      </li>
    );
  }
});
