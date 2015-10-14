var LogStatus = React.createClass({
  logOut: function() {
    ApiUtil.endSession();
  },
  render: function() {
    if(typeof CURRENT_USER_ID === "undefined") {
      return (
        <ul className="nav navbar-nav">
          <li className="log-btn">
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
        <ul className="nav navbar-nav">
          <button className="btn" onClick={this.logOut}>
            Log Out
          </button>
        </ul>
      );
    }
  }
});
