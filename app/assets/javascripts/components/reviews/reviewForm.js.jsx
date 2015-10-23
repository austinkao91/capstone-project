var ReviewForm = React.createClass({
  submitForm: function(event) {
    event.preventDefault();
    var rating = event.currentTarget[0].value;
    var body = event.currentTarget[1].value;
    var restaurant_id = this.props.restaurant_id;
    ApiUtil.createReview({restaurant_id: restaurant_id, rating: rating, body: body});
  },
  render: function() {
    return (

        <li className="review-item group">
          <UserSide user={this.props.user}/>
          <div className="review-content group">
            <div className="review-info">
              <form className="review-form" onSubmit={this.submitForm}>
                Start your review of&nbsp;<strong>{this.props.restaurantName}</strong>
                <br/>
                <label className="review-rating">
                  <RatingForm />
                </label>
                <br/>
                <label className="review-body">
                  Review
                  <textarea className="form-control"></textarea>
                </label>
                <input type="submit" className="review-form-submit" value="Post Review!"></input>
              </form>
            </div>
          </div>
        </li>

    );
  }
});
