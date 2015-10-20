var LogStatus = React.createClass({
  mixins: [ReactRouter.History],
  logOut: function() {
    ApiUtil.endSession();
  },
  userProfile: function() {
    var url = "user/" + window.CURRENT_USER_ID;
    this.history.pushState(null, url);
    ApiUtil.fetchUser(window.CURRENT_USER_ID);
  },
  render: function() {
    if(typeof CURRENT_USER_ID === "undefined") {
      return (
        <ul className="nav navbar-nav log-btn">
          <li>
            <a href="/users/new">Sign Up!</a>
          </li>
          <li className="log-btn">
            <a href="/session/new">Log In</a>
          </li>
        </ul>
      );
    }
    else {
      return (
        <ul className="nav log-btn">
          <li className="nav-user-links">
            <p>Welcome &nbsp; {window.CURRENT_USERNAME}</p>
            <a href="#">User</a>
            <ul className="user-links">
              <li className="content" onClick={this.userProfile}>Your Profile</li>
              <li className="content" onClick={this.logOut}>Log Out</li>
            </ul>
          </li>
        </ul>
      );
    }
  }
});
