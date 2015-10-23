var RestaurantSide = React.createClass({
  mixins: [ReactRouter.History],
  navTo: function(event) {
    event.preventDefault();
    var url = "/restaurants/" + this.props.restaurantId;
    this.history.pushState(null, url);
  },
  render: function() {
    return (
      <div className="review-user-info group">
        <img  onClick={this.navTo}
          className="restaurant-pic"
          src={this.props.image_url}/>
        <div className="user-side-info">
          <p onClick={this.navTo}>{this.props.title}</p>
        </div>
      </div>
    );
  }
});
