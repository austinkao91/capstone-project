  var RestaurantSide = React.createClass({
  mixins: [ReactRouter.History],
  navTo: function(event) {
    event.preventDefault();
    var url = "/restaurants/" + this.props.restaurantId;
    this.history.pushState(null, url);
  },
  render: function() {
    return (
      <div className="review-restaurant-info group">
          <div className="restaurant-info">
          <p className="restaurant-side-info" onClick={this.navTo}>{this.props.title}</p>
        </div>
        <ImageIndex  onClick={this.navTo} images={this.props.image_url}/>
      </div>
    );
  }
});
