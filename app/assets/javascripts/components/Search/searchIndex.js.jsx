var SearchIndex = React.createClass({
  render: function() {
    return(
      <div className="header group">
        <div className="filters">
          <FilterIndex />
        </div>
        <RestaurantIndex />
      </div>
    );
  }
});
