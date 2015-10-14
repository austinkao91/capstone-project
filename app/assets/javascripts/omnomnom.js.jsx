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
        { this.props.children }
      </div>
    );
  }
});



$(document).ready(function(){
  var root = document.getElementById("app");
  if(root) {
    React.render(
      <Router>
        <Route path="/" component={Index}>
          <IndexRoute component={RestaurantIndex}/>
          <Route path="restaurants" component={RestaurantIndex}>
            <Route path=":restaurantId" component={RestaurantDetail}/>
          </Route>
          <Route path="restaurant/new" component={RestaurantForm}/>
        </Route>
      </Router>,
      root
    );
  }
});
