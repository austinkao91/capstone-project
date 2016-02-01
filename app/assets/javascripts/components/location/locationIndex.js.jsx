var LocationIndex = React.createClass({
  getInitialState: function() {
    return {locations: LocationStore.all(), limit: true};
  },
  componentDidMount: function() {
    LocationStore.addHandler(LocationConstants.CHANGE_EVENT, this.getLocations);
    ApiUtil.fetchLocations();
  },
  componentWillUnmount: function() {
    LocationStore.removeHandler(LocationConstants.CHANGE_EVENT, this.getLocations);
  },
  getLocations: function() {
    this.setState({locations: LocationStore.all()});
  },
  toggleExpand: function() {
    this.setState({limit: !this.state.limit});
  },
  take: function(location, limit) {
    var locationArray = [];
    var filterLocation = FilterStore.all().location;
    var count = 0;
    var idx = 0;
    var found = false;
    while(idx <= this.state.locations.length-1 && count < limit ){
      if(filterLocation.city === location[idx].city &&
          filterLocation.state === location[idx].state) {
            locationArray.push(location[idx]);
            count++;
            found = true;
      } else if (found || count < limit - 1) {
        locationArray.push(location[idx]);
        count++;
      }
      idx++;
    }
    return locationArray;
  },
  render: function() {
    var locations;
    if(this.state.limit) {
      locations = this.take(this.state.locations,3);
      return (
        <div className="location-index">
          <ul className="location-index-list">
            <li className="location-item">
                <div onClick={this.toggleExpand}>
                  <p>More Locations >> </p>
                </div>
            </li>
            {
              locations.map(function(location, idx){
                return <LocationItem location={location} key={idx}/>;
              })
            }
          </ul>
        </div>
      );
    } else {
      locations = this.state.locations;
      return (
        <div className="location-index">
          <ul className="location-index-list">
            {
              locations.map(function(location, idx){
                return <LocationItem location={location} key={idx}/>;
              })
            }
          <li className="location-item">
              <div onClick={this.toggleExpand}>
                <p> {"<< Less Locations"} </p>
              </div>
          </li>
          </ul>
        </div>
      );
    }
  }
});
