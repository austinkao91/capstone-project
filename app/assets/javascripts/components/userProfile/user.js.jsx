var UserProfile = React.createClass({
  getInitialState: function() {
    return {user: UserStore.all()};
  },
  componentDidMount: function() {
    UserStore.addHandler(UserConstants.CHANGE_EVENT, this.onChange);
    ApiUtil.fetchUser(parseInt(this.props.params.userId));
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
          <CloudinaryUploader upload="user" />
        </div>
        <UserReviewIndex reviews={this.state.user.reviews}/>
      </div>
    );
  }
});
