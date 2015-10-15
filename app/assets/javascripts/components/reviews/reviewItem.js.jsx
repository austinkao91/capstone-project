var ReviewItem = React.createClass({
  render: function() {
    var review = this.props.review;
    return (
      <li className="review-item group">
        <div className="review-user-info">
          {review.username}
          <img className="user-pic" src={review.image_url}/>
          <br/>
        </div>
        <div className="review-content group">
          <div className="review-info">
            <span className="rating">
              Rating: {review.rating}/5
            </span>
            <span className="post-date">
              {review.created_at}
            </span>
          </div>
          <div className="review-body">
            {review.body}
          </div>
        </div>

      </li>
    );
  }
});
