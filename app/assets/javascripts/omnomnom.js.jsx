/* global React */
/* global ReactRouter */

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Index = React.createClass({
  render: function(){
    return(
      <div className="omnomnom-index">
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
});

$(document).ready(function(){
  EventEmitter.defaultMaxListeners = 500;
  var root = document.getElementById("app");
  if(root) {
    React.render(
      <Router>
        <Route path="/" component={Index}>
          <IndexRoute component={SearchIndex}/>
          <Route path="restaurants" component={SearchIndex}/>
          <Route path="restaurants/:restaurantId" component={RestaurantDetail}/>
          <Route path="restaurant/new" component={RestaurantLocationForm}/>
          <Route path="user/:userId" component={UserProfile}/>
        </Route>
      </Router>,
      root
    );
  }
});
