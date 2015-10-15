var ReviewIndex = React.createClass({
  getInitialState: function() {
    return {showForm: false};
  },
  componentWillReceiveProps: function(nextProps) {
    this.checkUserId(nextProps);
  },
  componentDidMount: function() {
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT,
                                this.checkUserId.bind(null, this.props));
  },
  checkUserId: function(nextProps) {
    var show = false;
    if(typeof window.CURRENT_USER_ID !== "undefined"){
      show = true;
      if(typeof nextProps.restaurant.reviews !== "undefined") {
          nextProps.restaurant.reviews.forEach(function(review) {
          if(review.user_id === window.CURRENT_USER_ID) { show = false; }
        });
      }
    }
    this.setState({showForm: show});
  },
  render:function() {
    var form;
    if (this.state.showForm) {
      form = <ReviewForm restaurant_id={this.props.restaurant.id} />;
    } else {
      form = "";
    }
    if(this.props.reviews) {
      return (
        <div className="review-index">
          {form}
          <ul className='review-item-list'>
            {
              this.props.reviews.map(function(review, idx){
                return <ReviewItem key={idx} review={review} />;
              })
            }
          </ul>
        </div>
      );
    } else {
      return (
        <div className="review-index"></div>
      );
    }

  }
});
