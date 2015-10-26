var ReviewOptions = React.createClass({
  mixins: [ReactRouter.History],
  editReview: function() {
    this.props.enable();
  },
  deleteReview: function() {
    if(window.CURRENT_USER_ID === this.props.userId) {
      var result = confirm("Want to delete?");
      if(result) {
        ApiUtil.deleteReview({reviewId: this.props.reviewId});
      }
    }
  },
  render: function() {
    if(window.CURRENT_USER_ID === this.props.userId) {
      return (
        <div className="review-options">
          <div className="group edit glyphicon glyphicon-pencil"
             onClick={this.editReview}/>
           <div className="group delete glyphicon glyphicon-trash"
             onClick={this.deleteReview}/>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
