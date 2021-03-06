var RestaurantIndex = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function() {
    return {set: false, count: 0, load: false, restaurants: RestaurantStore.all(), page: 1, showLimit: 10};
  },
  loading: function(callback) {
    this.setState({load: true}, callback);
  },
  loadComplete: function() {
  },
  setRestaurant: function() {
    this.setState({ restaurants: RestaurantStore.all()}, this.loadComplete);
  },
  fetchRestaurants: function() {
    ApiUtil.fetch(FilterStore.all());
  },
  componentDidMount: function() {
    FilterStore.addHandler(FilterConstants.CHANGE_EVENT,
                             this.fetchRestaurants);
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.setRestaurant);
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.checkPage);
    ApiUtil.fetch(FilterStore.all());
  },
  componentWillUnmount: function() {
    FilterStore.removeHandler(FilterConstants.CHANGE_EVENT,
                             this.fetchRestaurants);
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT, this.checkPage);
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT, this.setRestaurant);
  },
  checkPage: function() {
    if(this.state.restaurants.length > 0) {
      var page;
      var max_pages = Math.ceil(this.state.restaurants.length/this.state.showLimit);
      if(this.state.page >= max_pages) {
        page = max_pages;
        this.setState({page: page});
      }
    }
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
  redirectTo: function(event) {
    event.preventDefault();
    this.history.pushState(null, "/restaurant/new");
  },
  setPage: function(page) {
    if(this.state.page >= 1 &&
      this.state.page <= Math.ceil(this.state.restaurants.length/this.state.showLimit)) {
        this.setState({page: page});
      }
  },
  elapsedTimeScreen: function(){
    if(!this.state.set) {
      this.setState({count: this.state.count + 1, set: false});
    } else {
      this.setState({count: this.state.count + 1});
    }
  },
  render: function(){
    var firstRestaurant = (this.state.page-1)*this.state.showLimit;
    var lastRestaurant = this.state.page*this.state.showLimit;
    if(lastRestaurant >= this.state.restaurants.length) {
      lastRestaurant = this.state.restaurants.length;
    }
    var restaurants;
    var restaurantIndexList;
    if(this.state.restaurants.length === 0 ) {
      restaurantIndexList = (
        <ul className="restaurants-index-list">
          <li className="notification">
            Sorry! We couldn't find what you were looking for!
            Click <a onClick={this.redirectTo}>here</a> to add a restaurant to our database
          </li>
          <br/>
        </ul>
      );
    } else {
      restaurants = this.state.restaurants.slice(firstRestaurant, lastRestaurant);
      restaurantIndexList = (<ul className="restaurants-index-list">
        {
          restaurants.map(function(restaurant, idx){
            return <RestaurantItem restaurant={restaurant} listNum={idx} key={idx}/>;
          })
        }
      </ul>);
    }
    if(this.state.load) {
      if(!this.state.set) {
        setInterval(this.elapsedTimeScreen, 500);
        this.state.set = true;
      }
      var ellipsis = "";
      for(var i = 0; i < this.state.count % 4; i++) {
        ellipsis += ".";
      }

      return (
        <div className="index group">
          <h1>Loading{ellipsis}</h1>
        </div>
      );
    } else {
      return(
          <div className="index group">
            <div className="index-container group">
              <div className="restaurants-index">
                {restaurantIndexList}
                <PageDisplay
                  setPage={this.setPage}
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
                  pageNum={this.state.restaurants.length}
                  currentPage={this.state.page}
                  showing={this.state.showLimit}/>
              </div>
              <MapIndex restaurants={restaurants} />
            </div>
          </div>
      );
    }
  }
});
