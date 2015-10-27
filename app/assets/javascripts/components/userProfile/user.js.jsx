var UserProfile = React.createClass({
  getInitialState: function() {
    return {user: UserStore.all()};
  },
  componentDidMount: function() {
    UserStore.addHandler(UserConstants.CHANGE_EVENT, this.onChange);
    ApiUtil.fetchUser(parseInt(this.props.params.userId));
  },
  componentWillUnmount: function() {
    UserStore.removeHandler(UserConstants.CHANGE_EVENT, this.onChange);
  },
  onChange: function() {
    this.setState({user: UserStore.all()});
  },
  render: function() {
    var button;
    if(window.CURRENT_USER_ID === this.state.user.id) {
      button = <CloudinaryUploader upload="user" />;
    }
    return (
      <div>
        <div className="header group">
          <div className="header-user-info">
            <div className="user-profile-img">
              <img src={this.state.user.image_url ? this.state.user.image_url: null}></img>
            </div>
            <div className="user-stats">
              <h1>{this.state.user.username ? this.state.user.username: null}</h1>
              <div className="large">
                <div className="rating-num group">
                  <RatingStar rate="star"/>&nbsp;
                  <div className="rating-len group">
                    <b>{this.state.user.reviews? this.state.user.reviews.length: null}</b>&nbsp;reviews
                  </div>
                </div>
              </div>
            </div>
            <div className="user-actions">
              {button}
            </div>
          </div>
        </div>
        <div className="index group">

          <UserReviewIndex reviews={this.state.user.reviews}/>
        </div>
      </div>
    );
  }
});
