var SearchForm = React.createClass({
  mixins: [ReactRouter.History],
  componentDidMount: function() {
    ApiUtil.fetchTags();
    ApiUtil.fetchLocations();
  },
  searchRestaurants: function(event) {
    event.preventDefault();

    var loc_array = event.currentTarget.form[1].value.split(", ");
    var filter = {};
    if(loc_array.length === 2) {
      filter.location = {city: loc_array[0].trim(), state: loc_array[1].trim()};
    } else {
      filter.location = {city: null, state: null};
    }
    filter.tags = event.currentTarget.form[0].value.trim().split(/\s+/g);

    FilterActions.addFilters(filter);
    this.history.pushState(null, "/restaurants");
  },
  render: function() {
    return (
      <form className="search group" role="search">
        <SearchBar placeholder="Find Food" id="tags"/>
        <SearchBar placeholder="Nearby Location" id="location"/>

        <button id="search-icon" type="submit" onClick={this.searchRestaurants}  className="btn btn-default">
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
      </form>
    );
  }
});
