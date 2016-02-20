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
    FilterActions.resetFilters();
    this.history.pushState(null, "/#");
  },
  render: function(){
    return(
      <div className="nav-links group">
        <ul className="nav-links-list">
          <li onClick={this.navHome} className="navigation-link">
            <p >Home</p>
          </li>
          <li onClick={this.newRestaurant} className="navigation-link">
            <p  >New Restaurant</p>
          </li>
        </ul>
      </div>
    );
  }
});
