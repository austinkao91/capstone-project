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
        <form className="review-form" onSubmit={this.submitForm}>
          <label className="review-rating">
            Rating
            <select className="form-control">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value='5'>5</option>
            </select>
          </label>
          <br/>
          <label className="review-body">
            Review
            <textarea className="form-control"></textarea>
          </label>
          <input type="submit" className="review-form-submit" value="Review!"></input>
        </form>
    );
  }
});
