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
        <Route path="/" component={RestaurantIndex}>
          <Route path="restaurants/:restaurantId" component={RestaurantDetail}/>
        </Route>

      </Router>,
      root
    );
  }
});
