var ReviewIndex = React.createClass({
  render:function() {
    var form;
    if (typeof window.CURRENT_USER_ID === "undefined") {
      form = "";
    } else {
      form = <ReviewForm restaurant_id={this.props.id} />;
    }
    if(this.props.reviews) {
      return (
        <div className="review-index">
          {form}
          <ul className='review-item-list'>
            {
              this.props.reviews.map(function(review, idx){
                return <ReviewItem key={idx} review={review} />;
              })
            }
          </ul>
        </div>
      );
    } else {
      return (
        <div className="review-index"></div>
      );
    }

  }
});
