/* global React */
/* global ReactRouter */

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Index = React.createClass({
  render: function(){
    return(
      <div className="omnomnom-index">
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
          <IndexRoute component={RestaurantIndex}>
            <Route path="restaurant/:restaurantId" component={RestaurantDetail}/>
          </IndexRoute>
          <Route path="restaurant/new" component={RestaurantForm} />
          <Route path="restaurant/:restaurantId" component={RestaurantDetail}/>
        </Route>
      </Router>,
      root
    );
  }
});
