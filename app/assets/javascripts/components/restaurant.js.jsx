var RestaurantIndex = React.createClass({
  getInitialState: function() {
    return {restaurants: RestaurantStore.all()};
  },
  setRestaurant: function() {
    this.setState({restaurants: RestaurantStore.all()});
  },
  componentDidMount: function() {
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.setRestaurant);
    ApiUtil.fetch();
  },
  componentWillUnmount: function() {
    RestaurantStore.removeHandler(RestaurantConstant.CHANGE_EVENT, this.setRestaurant);
  },
  render: function(){
    return(
      <div className="restaurants-index">
        <ul>
          {
            this.state.restaurants.map(function(restaurant, idx){
              return <li key={idx}>{restaurant.title}</li>;
            })
          }
        </ul>
      </div>
    );
  }
});
