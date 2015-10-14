var RestaurantDetail = React.createClass({
  getInitialState: function() {
    return {restaurant: this.getRestaurantState()};
  },
  getRestaurantState: function() {
    return RestaurantStore.find(parseInt(this.props.params.restaurantId));
  },
  update: function() {
    this.setState({restaurant: this.getRestaurantState()});
  },
  componentDidMount: function() {
    RestaurantStore.addHandler(RestaurantConstants.RESTAURANT_DETAIL_CHANGE_EVENT, this.update);
  },
  componentWillReceiveProps: function(nextProps) {
    ApiUtil.getOne(parseInt(nextProps.params.restaurantId));
  },
  componentWillMount: function() {
    ApiUtil.getOne(parseInt(this.props.params.restaurantId));
  },
  render: function() {
    return(
      <div className="restaurant-detail">
        <h1>DETAIL</h1>
        <ul>
          {
            Object.keys(this.state.restaurant).map(function(prop, idx){
              return <li key={idx}>{prop}{": "}{this.state.restaurant[prop]}</li>;
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});
