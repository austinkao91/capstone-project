var LocationItem = React.createClass({
  getInitialState: function() {
    return {checked: false};
  },
  filterRestaurants: function() {
    var location = this.props.location;
    FilterActions.toggleLocationFilter({location: {city:location.city, state:location.state}});
  },
  componentDidMount: function() {
    FilterStore.addHandler(FilterConstants.CHANGE_EVENT, this.getCheckedState);
  },
  componentWillUnmount: function() {
    FilterStore.removeHandler(FilterConstants.CHANGE_EVENT, this.getCheckedState);
  },
  componentWillReceiveProps: function() {
    this.getCheckedState();
  },
  getCheckedState: function(){
    var checked = false;
    var itemLocation = this.props.location;
    var location = FilterStore.all().location;
    if(location.city === itemLocation.city && location.state === itemLocation.state) {
         checked = true;
    }
    this.setState({checked: checked});
  },
  render: function() {
    debugger
    if(this.state.checked) {
      return(
        <li className="location-item">
          <input type="checkbox"
            checked
            onChange={this.filterRestaurants}>
            {this.props.location.city}, {this.props.location.state}&nbsp;({this.props.location.restaurants.length})
          </input>
        </li>
      );
    } else {
      return(
        <li className="location-item">
          <input type="checkbox"
            onChange={this.filterRestaurants}>
            {this.props.location.city}, {this.props.location.state}&nbsp;({this.props.location.restaurants.length})
          </input>
        </li>
      );
    }
  }
});
