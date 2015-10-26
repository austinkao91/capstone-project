var EditReview = React.createClass({
  getInitialState:function() {
    return {body: this.props.review.body};
  },
  changeBody: function(event) {
    this.setState({body: event.target.value});
  },
  componentDidMount: function() {
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT, this.props.disable);
  },
  componentWillUnmount: function() {
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT, this.props.disable);
  },
  submitForm: function(event) {
    event.preventDefault();
    var rating = parseInt(this.rating);
    var body = this.state.body;
    var restaurant_id = this.props.restaurant_id;
    ApiUtil.updateReview({reviewId: this.props.review.id, rating: rating, body: body});
  },
  setRating: function(rating) {
    this.rating = rating;
  },
  render: function() {
    var reviewBody;
    var reviewSubmit;
    reviewBody = (
      <label className="review-body">
        <p>
          Your review
        </p>
        <textarea className="form-control"
          onChange={this.changeBody}
          value={this.state.body}/>
      </label>
    );
    reviewSubmit = (
        <button type="submit"
              className="review-form-submit group">
                <div className="glyphicon glyphicon-star "/>
                <p>&nbsp;Update Review&nbsp;</p>
        </button>
    );
    return (
        <li className="review-item group">
          <UserSide user={this.props.user}/>
          <div className="review-form-info">
            <form className="review-form " onSubmit={this.submitForm}>
              <i>
                Edit your review of&nbsp;<p>{this.props.restaurantName}</p>
              </i>
              <br/>
              <label className="review-rating">
                <RatingForm setRating={this.setRating}/>
              </label>
              {reviewBody}
              {reviewSubmit}
            </form>
          </div>
        </li>
      );
  }
});
