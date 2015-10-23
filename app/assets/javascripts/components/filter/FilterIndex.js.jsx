var FilterIndex = React.createClass({
  render: function(){
    return(
      <div className="filters">
        <TagIndex />
        <LocationIndex />
        <PriceRangeIndex />
      </div>
    );
  }
});
