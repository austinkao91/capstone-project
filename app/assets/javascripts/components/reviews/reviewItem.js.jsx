var ReviewItem = React.createClass({
  mixins: [ReactRouter.History],
  navTo:function(event) {
    event.preventDefault();
    var url;
    if(typeof this.props.review.restaurantName === "undefined") {
      url = "/user/" + this.props.review.user_id;
    } else {
      url = "/restaurants/" + this.props.review.restaurant_id;
    }
    this.history.pushState(null, url);
  },
  render: function() {
    var review = this.props.review;
    var info;
    if(typeof review.restaurantName === "undefined") {
        info = (
          <UserSide user={review.user}/>
      );
    } else {
      info = (
        <div className="review-user-info">
          <img  onClick={this.navTo} className="restaurant-pic" src="#"/>
          <div className="user-side-info">
            <p onClick={this.navTo}>{review.restaurantName}</p>
          </div>
        </div>
      );
    }
    return (
      <li className="review-item group">
        {info}
        <div className="review-content group">
          <div className="review-info">
            <span className="rating">
              <Rating rating={review.rating.toFixed(1)}/>
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
