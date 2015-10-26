var RestaurantIndex = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function() {
    return {restaurants: RestaurantStore.all(), page: 1, showLimit: 10};
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
  nextPage: function() {
    if(this.state.page <= Math.ceil(this.state.restaurants.length/this.state.showLimit)) {
      this.setState({page: this.state.page + 1});
    }
  },
  prevPage: function() {
    if(this.state.page > 1) {
      this.setState({page: this.state.page-1});
    }
  },
  setPage: function(page) {
    if(this.state.page >= 1 &&
      this.state.page <= Math.ceil(this.state.restaurants.length/this.state.showLimit)) {
        this.setState({page: page});
      }
  },
  render: function(){
    var firstRestaurant = (this.state.page-1)*this.state.showLimit;
    var lastRestaurant = this.state.page*this.state.showLimit;
    if(lastRestaurant >= this.state.restaurants.length) {
      lastRestaurant = this.state.restaurants.length;
    }
    var restaurants = this.state.restaurants.slice(firstRestaurant, lastRestaurant);
    return(
        <div className="index group">
          <div className="index-container group">
            <MapIndex restaurants={restaurants} />
            <div className="restaurants-index">
              <ul className="restaurants-index-list">
                {
                  restaurants.map(function(restaurant, idx){

                    return <RestaurantItem restaurant={restaurant} listNum={idx} key={idx}/>;
                  })
                }
              </ul>
              <PageDisplay
                setPage={this.setPage}
                nextPage={this.nextPage}
                prevPage={this.prevPage}
                pageNum={this.state.restaurants.length}
                currentPage={this.state.page}
                showing={this.state.showLimit}/>
            </div>
          </div>
        </div>
    );
  }
});
