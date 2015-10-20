var RestaurantIndex = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function() {
    return {restaurants: RestaurantStore.all()};
  },
  setRestaurant: function() {
    this.setState({restaurants: RestaurantStore.all()});
  },
  fetchRestaurants: function() {
    ApiUtil.fetch(FilterStore.all());
  },
  componentDidMount: function() {
    FilterStore.addHandler(FilterConstants.CHANGE_EVENT,
                             this.fetchRestaurants);
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.setRestaurant);
    ApiUtil.fetch(FilterStore.all());
  },
  componentWillUnmount: function() {
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT, this.setRestaurant);
  },
  render: function(){
    return(
      <div>
        <div className="index group">
          <div className="filters">
            <TagIndex />
          </div>
          <MapIndex />
          <ul className="restaurants-index">
            <h1>Restaurants</h1>
            {
              this.state.restaurants.map(function(restaurant, idx){
                return <RestaurantItem restaurant={restaurant} listNum={idx} key={idx}/>;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
});
