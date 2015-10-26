var ReviewForm = React.createClass({
  getInitialState: function() {
    return {review: false};
  },
  submitForm: function(event) {
    event.preventDefault();
    var rating = parseInt(this.rating);
    var body = event.currentTarget[0].value;
    var restaurant_id = this.props.restaurant_id;
    ApiUtil.createReview({restaurant_id: restaurant_id, rating: rating, body: body});
  },
  setRating: function(rating) {
    this.rating = rating;
    this.setState({review: true});
  },
  render: function() {
    var reviewBody;
    var reviewSubmit;
    if(this.state.review) {
      reviewBody = (
        <label className="review-body">
          <p>
            Your review
          </p>
          <textarea className="form-control"></textarea>
        </label>
      );
      reviewSubmit = (
          <button type="submit"
                className="review-form-submit group">
                  <div className="glyphicon glyphicon-star "/>
                  <p>&nbsp;Post Review&nbsp;</p>
          </button>
      );
    }
    return (
        <li className="review-item group">
          <UserSide user={this.props.user}/>
          <div className="review-form-info">
            <form className="review-form " onSubmit={this.submitForm}>
              <i>
                Start your review of&nbsp;<p>{this.props.restaurantName}</p>
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
