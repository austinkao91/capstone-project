var SearchIndex = React.createClass({
  render: function() {
    return(
      <div className="search-page">
        <div className="header group">
          <FilterIndex />
        </div>
        <RestaurantIndex />
      </div>
    );
  }
});
