var NavigationBar = React.createClass({
  render: function() {
    return (
      <nav className="home">
          <div className="container-content group">
              <div className="logo group">
                <a href="#">
                  <img src="https://res.cloudinary.com/omnombloop/image/upload/c_scale,w_100/v1455792170/cookie_xrrycm.png"/>
                </a>
              </div>
              <LogStatus />
              <div className="user-nav-search group">
                <SearchForm />
                <NavigationLinks />
            </div>
          </div>
      </nav>
    );
  }
});
