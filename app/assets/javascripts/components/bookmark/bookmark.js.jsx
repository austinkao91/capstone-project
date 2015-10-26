var BookMark = React.createClass({
  bookMark: function() {
    if(typeof window.CURRENT_USER_ID === "undefined") {
      window.location ="/session/new";
    } else {
      ApiUtil.updateUser({bookMark: this.props.id});
    }
  },
  render: function() {
    return (
      <div className="group bookmark" onClick={this.bookMark}>
        <div className="glyphicon glyphicon-bookmark "/>
        <p> Bookmark </p>
      </div>
    );
  }
});
