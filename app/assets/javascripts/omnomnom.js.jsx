/* global React */
/* global ReactRouter */

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Index = React.createClass({
  render: function(){
    return(
      <div className="omnomnom-index">
        {
          <RestaurantIndex />
        }
      </div>
    );
  }
});



$(document).ready(function(){
  var root = document.getElementById("id");
  React.render(
    <Index />,
    root
  );
});
