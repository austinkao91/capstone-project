var RestaurantTagIndex = React.createClass({
  mixins: [ReactRouter.History],
  handleClick: function(tag, event) {
    event.preventDefault();
    FilterActions.addFilters({tags: [tag]});
    this.history.pushState(null, "/restaurants");
  },
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
              return <li className="tag-item" onClick={this.handleClick.bind(null, tag.title)} key={idx}>{tag.title}</li>;
            }.bind(this))
          }
        </ul>
      );
    }
  }
});
