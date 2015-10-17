var RestaurantTagIndex = React.createClass({
  render: function() {
    if(typeof this.props.tags === "undefined") {
        return(
          <ul>

          </ul>
        );
    } else {
      return(
        <ul>
          {
            this.props.tags.map(function(tag,idx){
              return <li key={idx}><a href="#">{tag.title}</a></li>;
            })
          }
        </ul>
      );
    }
  }
});
