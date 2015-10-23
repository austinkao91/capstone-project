var UserSide = React.createClass({
  mixins: [ReactRouter.History],
  navTo: function(event) {
    event.preventDefault();
    var url = "/user/" + this.props.user.id;
    this.history.pushState(null, url);
  },
  render: function() {
    if(typeof this.props.user === "undefined" ) {
      this.user = {
        id: window.CURRENT_USER_ID,
        image_url: window.CURRENT_USER_IMAGE_URL,
        username: window.CURRENT_USERNAME
      };
    } else {
        this.user = this.props.user;
    }
    return (
      <div className="review-user-info group">
        <img onClick={this.navTo}
          className="user-pic"
          src={this.user ? this.user.image_url: null}/>
        <div className="user-side-info">
          <p onClick={this.navTo}>{this.user ? this.user.username: null}</p>
        </div>
      </div>
    );
  }
});
