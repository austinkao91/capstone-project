var PriceRangeIndex = React.createClass({
  getInitialState: function(){
    return {checkedIdx: 0};
  },
  componentDidMount: function() {
    FilterStore.addHandler(FilterConstants.CHANGE_EVENT, this.onChange);
    this.onChange();
  },
  onChange: function() {
    this.setState({checkedIdx: FilterStore.all().priceRange.price });
  },
  componentWillUnmount: function() {
    FilterStore.removeHandler(FilterConstants.CHANGE_EVENT, this.onChange);

  },
  render: function(){
    var priceRange = [1,2,3,4];
    var price = "";
    return (
        <ul className="price-range-index group">
          {
            priceRange.map(function(priceRange, idx) {
              price +=  "$";
              return <li key={idx}>
                <PriceRangeItem
                  value={priceRange}
                  price={price}
                  checkedIdx={this.state.checkedIdx}/>
              </li>;
            }.bind(this))
          }

        </ul>
    );
  }
});
