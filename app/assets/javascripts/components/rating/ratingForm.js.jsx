var RatingForm = React.createClass({
  render: function() {
    return (
      <div className="rating-form" data-rate={this.props.rating}>
        <i className="star-1">★</i>
        <i className="star-2">★</i>
        <i className="star-3">★</i>
        <i className="star-4">★</i>
        <i className="star-5">★</i>
      </div>
    );
  }
});
