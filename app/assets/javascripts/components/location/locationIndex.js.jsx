var LocationIndex = React.createClass({
  getInitialState: function() {
    return {locations: LocationStore.all()};
  },
  componentDidMount: function() {
    LocationStore.addHandler(LocationConstants.CHANGE_EVENT, this.getLocations);
    if(LocationStore.all().length === 0) {ApiUtil.fetchLocations();}
  },
  componentWillUnmount: function() {
    LocationStore.removeHandler(LocationConstants.CHANGE_EVENT, this.getLocations);
  },
  getLocations: function() {
    this.setState({locations: LocationStore.all()});
  },
  render: function() {
    return (
      <div className="location-index">
        <ul>
          {
            this.state.locations.map(function(location, idx){
              return <LocationItem location={location} key={idx}/>;
            })
          }
        </ul>
      </div>
    );
  }
});
