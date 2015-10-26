var UserReview = React.createClass({
  render: function() {
    var review = this.props.review;
    if(typeof this.props.reviews === 'undefined') {
      return (
        <div className="review-index"></div>
      );
    } else {
      return (
        <div className="review-index">
          {form}
          <ul className='review-item-list group'>
            {
              this.props.reviews.map(function(review, idx){
                return <ReviewItem key={idx} review={review} />;
              })
            }
          </ul>
        </div>
      );
    }
  }
});
