var NavigationLinks = React.createClass({
  mixins: [ReactRouter.History],
  newRestaurant: function() {
    if(window.CURRENT_USER_ID) {
      this.history.pushState(null, "restaurant/new");
    } else {
      window.location = "/session/new";
    }
  },
  navHome: function() {
    this.history.pushState(null, "/#");
  },
  render: function(){
    return(
      <div className="nav-links group">
        <ul className="nav-links-list">
          <li className="navigation-link">
            <p onClick={this.navHome}>Home</p>
          </li>
          <li className="navigation-link">
            <p onClick={this.newRestaurant} >New Restaurant</p>
          </li>
        </ul>
      </div>
    );
  }
});
