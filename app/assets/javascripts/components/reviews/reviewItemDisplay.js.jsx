var ReviewItemDisplay = React.createClass({
  getInitialState: function() {
    return {edit: false};
  },
  enableEdit: function() {
    this.setState({edit: true});
  },
  disableEdit: function() {
    this.setState({edit: false});
  },
  render: function() {
    if(this.state.edit) {
      return (
        <EditReview
          review={this.props.review}
          restaurantName={this.props.restaurantName}
          disable={this.disableEdit}
          />
      );
    } else {
      return (
        <ReviewItem review={this.props.review}
          enable={this.enableEdit}/>
      );
    }
  }
});
