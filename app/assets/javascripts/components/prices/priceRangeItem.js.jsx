var PriceRangeItem = React.createClass({
  filterRestaurants: function() {
    FilterActions.toggleObjectFilter({priceRange: {price: this.props.value}});
  },
  render: function(){
    var className = "group priceItem ";

    if(this.props.value === 1) {
      className += "firstPrice ";
    } else if(this.props.value === 4){
      className += "lastPrice ";
    }
    if(this.props.checkedIdx === this.props.value) {
      className += "selected ";
    }
    return(
      <div className={className} onClick={this.filterRestaurants}>
        <p>{this.props.price}</p>
      </div>
    );
  }
});
