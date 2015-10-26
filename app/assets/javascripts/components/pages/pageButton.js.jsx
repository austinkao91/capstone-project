var PageButton = React.createClass({
  render: function() {
    var mark = false;
    var next = false;
    var prev = false;
    if(this.props.mark === "prev") {
      if(this.props.current > 1) {
        mark = true;
        prev = true;
      }
    } else if(this.props.mark === "next"){
      if(this.props.current < this.props.pageLimit) {
        mark = true;
        next = true;
      }
    }

    if(mark && next) {
      return (
        <p className="page-button"
          onClick={this.props.action}>
          &#8594;
        </p>
      );
    } else if(mark && prev) {
        return (
          <p className="page-button"
            onClick={this.props.action}>
            &#8592;
          </p>
        );
    } else {
      return (
        <p className="page-button"></p>
      );
    }
  }
});
