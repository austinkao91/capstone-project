var FilterIndex = React.createClass({
  getInitialState: function() {
    return {filters: FilterStore.all()};
  },
  setFilters: function() {
    this.setState({filters: FilterStore.all()});
  },
  componentDidMount: function() {
    FilterStore.addHandler(FilterConstants.CHANGE_EVENT, this.setFilters);
  },
  componentWillUnmount:function() {
    FilterStore.removeHandler(FilterConstants.CHANGE_EVENT, this.setFilters);
  },
  tagsToString: function(tags) {
    var tagArray = [];
    for(var obj in tags) {
      if(tags[obj]) { tagArray.push(obj); }
    }
    return tagArray.join("/ ");
  },
  render: function(){
    var location = this.state.filters.location;
    var tag = this.tagsToString(this.state.filters.tags);
    var locInfo = "";
    if(location.city && location.state) {
      locInfo = "in " + location.city + ", " + location.state;
    }

    return(
      <div className="filters">
        <LocationIndex />
        <TagIndex />
        <div className="search-params">
          <b>Best {tag} Food</b> {locInfo}
        </div>
        <PriceRangeIndex />
      </div>
    );
  }
});
