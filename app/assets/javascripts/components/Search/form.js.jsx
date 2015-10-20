var SearchForm = React.createClass({
  mixins: [ReactRouter.History],
  searchRestaurants: function(event) {
    event.preventDefault();
    var filter = {
      tags: event.target.form[0].value.split(" "),
      location: event.target.form[1].value
    };
    FilterActions.addFilters(filter);
    this.history.pushState(null, "/restaurants");
  },
  render: function() {
    return (
      <form className="navbar-form search" role="search">
        <SearchBar placeholder="Find Food" id="tags"/>
        <SearchBar placeholder="Nearby Location" id="location"/>

        <button id="search-icon" type="submit" onClick={this.searchRestaurants}  className="btn btn-default">
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
      </form>
    );
  }
});
