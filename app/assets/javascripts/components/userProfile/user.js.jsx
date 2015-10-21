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

    return (
      <div className="index group">
        <div className="user-info">
          <h1>{this.state.user.username}</h1>
          <img src={this.state.user.image_url}></img>
          {CURRENT_USER_ID === this.state.user.id ? <CloudinaryUploader upload="user" /> : ""}
        </div>
        <UserReviewIndex reviews={this.state.user.reviews}/>
      </div>
    );
  }
});
