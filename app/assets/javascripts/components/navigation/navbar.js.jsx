var NavigationBar = React.createClass({
  render: function() {
    return (
      <nav className="home navbar navbar-default">

        <div className="container-fluid">

          <div className="navbar-header">
            <a className="navbar-brand" href="#">OMNOMNOM</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="user-nav-search">
              <SearchForm />
              <NavigationLinks />
            </div>
            <LogStatus />

          </div>

        </div>
      </nav>
    );
  }
});
