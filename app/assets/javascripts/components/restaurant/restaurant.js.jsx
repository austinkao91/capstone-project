var RestaurantIndex = React.createClass({
  mixins: [ReactRouter.History],
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
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT, this.setRestaurant);
  },
  newRestaurant: function() {
    this.history.pushState(null, "restaurant/new");
  },
  render: function(){
    return(
      <div className="restaurants-index">
        <ul>
          <h1>My Restaurants</h1>
          <input type="button" onClick={this.newRestaurant} value="New Restaurant"></input>
          {
            this.state.restaurants.map(function(restaurant, idx){
              return <RestaurantItem restaurant={restaurant} key={idx}/>;
            })
          }
        </ul>
      </div>
    );
  }
});
