var SearchIndex = React.createClass({
  render: function() {
    return(
      <div className="header group">
        <div className="filters">
          <LocationIndex />
          <TagIndex />
        </div>
        <RestaurantIndex />
      </div>
    );
  }
});
