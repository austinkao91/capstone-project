var UserSide = React.createClass({
  mixins: [ReactRouter.History],
  navTo: function(event) {
    event.preventDefault();
    var url;
    if(typeof this.props.user === "undefined") {
      url = "/user/" + window.CURRENT_USER_ID;
    } else {
      url = "/user/" + this.props.user.id;
    }
    this.history.pushState(null, url);
  },
  render: function() {

    var user;
    if(typeof this.props.user === "undefined" ) {
      user = {
        id: window.CURRENT_USER_ID,
        image_url: window.CURRENT_USER_IMAGE_URL,
        username: window.CURRENT_USERNAME
      };
    } else {
        user = this.props.user;
    }

    var reviewInfo;
    if(user.reviews) {
      reviewInfo = (
        <div className="rating-num group">
          <RatingStar rate="star"/>&nbsp;
          <div className="rating-len group">
            <b>{user.reviews.length}</b>&nbsp;reviews
          </div>
        </div>
      );
    } else {
      reviewInfo = <div className="rating-num group"></div>;
    }

    return (
      <div className="review-user-info group">
        <img onClick={this.navTo}
          className="user-pic"
          src={user ? user.image_url: null}/>
        <div className="user-info" >
          <p className="user-side-info"
            onClick={this.navTo}>
            {user ? user.username: null}
          </p>
          {reviewInfo}
        </div>
      </div>
    );
  }
});
