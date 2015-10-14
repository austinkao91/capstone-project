var NavigationLinks = React.createClass({
  mixins: [ReactRouter.History],
  newRestaurant: function() {
    this.history.pushState(null, "restaurant/new");
  },
  render: function(){
    return(
      <div className="nav-links">
        <ul className="nav navbar-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <button className="btn" onClick={this.newRestaurant} >New Restaurant</button>
          </li>
        </ul>
      </div>
    );
  }
});
