var NavigationLinks = React.createClass({
  mixins: [ReactRouter.History],
  newRestaurant: function() {
    this.history.pushState(null, "restaurant/new");
  },
  navHome: function() {
    this.history.pushState(null, "/#");
  },
  render: function(){
    return(
      <div className="nav-links group">
        <ul className="nav-links-list">
          <li>
            <a href="" onClick={this.navHome}>Home</a>
          </li>
          <li>
            <a href="" onClick={this.newRestaurant} >New Restaurant</a>
          </li>
        </ul>
      </div>
    );
  }
});
