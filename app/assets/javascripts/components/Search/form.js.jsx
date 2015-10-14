var SearchForm = React.createClass({
  render: function() {
    return (
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Find Food"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Near by Location"/>
        </div>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
    );
  }
});
