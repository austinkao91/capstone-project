var TagItem = React.createClass({
  getInitialState: function() {
    return {checked: false};
  },
  filterRestaurants: function() {
    FilterActions.toggleTagFilter({tags: [this.props.tag.title]});
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
    var tags = FilterStore.all().tags;
    Object.keys(tags).forEach(function(tag){
      if(tag === this.props.tag.title && tags[tag]) {
         checked = true;
      }
    }.bind(this));
    this.setState({checked: checked});
  },
  render: function() {
    if(this.state.checked) {
      return(
        <li className="tag-item">
          <input type="checkbox"
            checked
            onChange={this.filterRestaurants}>
            <span onClick={this.filterRestaurants}>
              {this.props.tag.title}&nbsp;
            </span>
          </input>
        </li>
      );
    } else {
      return(
        <li className="tag-item">
          <input type="checkbox"
            onChange={this.filterRestaurants}>
            <span onClick={this.filterRestaurants}>
              {this.props.tag.title}&nbsp;
            </span>
          </input>
        </li>
      );
    }
  }
});
