var RatingStar = React.createClass({

  render: function() {
      return(
        <div className={this.props.rate + " encompassing"}
             onMouseOver={this.props.onMouseOver}
            onClick={this.props.onClick}>
          <i className={this.props.rate + " star-" + this.props.rate}>★</i>
        </div>
      );
  }
});
