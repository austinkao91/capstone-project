var NavigationBar = React.createClass({
  render: function() {
    return (
      <nav className="home">
          <div className="container-content group">
              <div className="logo group">
                <a href="#">OMNOMNOM</a>
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
