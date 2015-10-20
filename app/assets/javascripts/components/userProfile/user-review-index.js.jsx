var UserReviewIndex = React.createClass({
  render:function() {
    if(typeof this.props.reviews === 'undefined') {
      return (
        <div className="review-index"></div>
      );
    } else {
      return (
        <div className="review-index">
          <ul className='review-item-list'>
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
