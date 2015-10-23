var PriceRangeItem = React.createClass({
  filterRestaurants: function() {
    FilterActions.toggleObjectFilter({priceRange: {price: this.props.value}});
  },
  render: function(){
    if(this.props.checkedIdx === this.props.value) {
      return(
          <input type="checkbox"
            checked
            onChange={this.filterRestaurants}>
            {this.props.price}&nbsp;
          </input>
      );
    } else {
      return(
          <input type="checkbox"
            onChange={this.filterRestaurants}>
            {this.props.price}&nbsp;
          </input>
      );
    }
  }
});
