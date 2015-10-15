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
  render: function(){
    return(
      <div>
        <div className="index group">
          <ul className="restaurants-index">
            <h1>Restaurants</h1>
            {
              this.state.restaurants.map(function(restaurant, idx){
                return <RestaurantItem restaurant={restaurant} listNum={idx} key={idx}/>;
              })
            }

          </ul>
        </div>
        { this.props.children }
      </div>
    );
  }
});
