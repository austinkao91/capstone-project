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
            <img src={window.CURRENT_USER_IMAGE_URL}/>
            <div className="user-links group">
              <div className="nav-user-info group">
                <img src={window.CURRENT_USER_IMAGE_URL}/>
                <div className="user-info">
                  <p className="user-side-info">
                    {window.CURRENT_USERNAME}
                  </p>
                  <div className="rating-num group">
                    <RatingStar rate="star"/>&nbsp;
                    <div className="rating-len group">
                      <b>{window.CURRENT_USER_REVIEWS}</b>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="user-link-list">
                <li className="content group" onClick={this.userProfile}>
                  <div className="glyphicon glyphicon-user"/>
                    <p>
                      About Me
                    </p>
                </li>
              </ul>
              <p className="log-out" onClick={this.logOut}>Log Out</p>
              </div>
          </li>
        </ul>
      );
    }
  }
});
