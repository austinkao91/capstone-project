var ReviewItem = React.createClass({
  render: function() {
    var review = this.props.review;
    var info;
    if(typeof review.restaurantName === "undefined") {
      info = (
        <div className="review-user-info">
          {review.username}
          <img className="user-pic" src={review.image_url}/>
          <br/>
        </div>
      );
    } else {
      info = (
        <div className="review-user-info">
          {review.restaurantName}
          <img className="restaurant-pic" src="#"/>
          <br/>
        </div>
      );
    }
    return (
      <li className="review-item group">
        {info}
        <div className="review-content group">
          <div className="review-info">
            <span className="rating">
              Rating:&nbsp;{review.rating}/5
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
