var Price = React.createClass({
  render: function() {
    var showPrice = "";
    for(var i = 0; i < this.props.price; i++ ) {
      showPrice += "$";
    }
    return (
      <p className="restaurant-price">{showPrice}</p>
    );
  }
});
