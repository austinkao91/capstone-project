var LocationItem = React.createClass({
  getInitialState: function() {
    return {checked: false};
  },
  filterRestaurants: function() {
    var location = this.props.location;
    FilterActions.toggleObjectFilter({location: {city:location.city, state:location.state}});
  },
  componentDidMount: function() {
    FilterStore.addHandler(FilterConstants.CHANGE_EVENT, this.getCheckedState);
    this.getCheckedState();
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
    var className;
    if(this.state.checked) {
      className="selected";
    }
    return(
      <li className="location-item">
          <div className={className} onClick={this.filterRestaurants}>
            <p>{this.props.location.city}, {this.props.location.state}</p>
          </div>
      </li>
    );
  }
});
