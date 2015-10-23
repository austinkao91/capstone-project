var ReviewItem = React.createClass({
  render: function() {
    var review = this.props.review;
    var info;
    if(typeof review.restaurantName === "undefined") {
        info = (
          <UserSide user={review.user}/>
      );
    } else {
      info = (
        <RestaurantSide
          title={review.restaurantName}
          restaurantId={review.restaurant_id}
          image_url={review.restaurant_image}/>
      );
    }
    return (
      <li className="review-item group">
        {info}
        <div className="review-content group">
          <div className="review-info">
            <Rating rating={review.rating.toFixed(1)}/>
            <p>&nbsp;{review.created_at}</p>
          </div>
          <div className="review-body">
            {review.body}
          </div>
        </div>

      </li>
    );
  }
});
