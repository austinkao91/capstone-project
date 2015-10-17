var LogStatus = React.createClass({
  logOut: function() {
    ApiUtil.endSession();
  },
  userProfile: function() {

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
        <ul className="nav navbar-nav log-btn">
          <p onClick={this.userProfile}>Welcome {CURRENT_USERNAME}</p>
          <button className="btn" onClick={this.logOut}>
            Log Out
          </button>
        </ul>
      );
    }
  }
});
