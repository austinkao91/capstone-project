var ReviewIndex = React.createClass({
  getInitialState: function() {
    return {showForm: false};
  },
  componentWillReceiveProps: function(nextProps) {
    this.checkUserId(nextProps);
  },
  componentDidMount: function() {
    RestaurantStore.addHandler(RestaurantConstants.CHANGE_EVENT,
                                this.checkUserId);
    this.checkUserId();
  },
  componentWillUnmount: function() {
    RestaurantStore.removeHandler(RestaurantConstants.CHANGE_EVENT,
                                this.checkUserId);
  },
  checkUserId: function(nextProps) {
    if(typeof nextProps === "undefined") { nextProps = this.props;}

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
      form = <ReviewForm
              restaurant_id={this.props.restaurant.id}
              restaurantName={this.props.restaurant.title} 
              />;
    } else {
      form = "";
    }

    if(typeof this.props.reviews === 'undefined') {
      return (
        <div className="review-index"></div>
      );
    } else {
      return (
        <div className="review-index">
          <ul className='review-item-list'>
            {form}
            {
              this.props.reviews.map(function(review, idx){
                return <ReviewItem key={idx} review={review} />;
              })
            }
          </ul>
        </div>
      );
    }

  }
});
