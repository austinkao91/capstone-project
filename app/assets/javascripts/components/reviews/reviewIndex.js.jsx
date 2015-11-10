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
  redirectTo: function(event) {
    event.preventDefault();
    window.location =  "/session/new";
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
    var logIn;
    if(typeof window.CURRENT_USER_ID) {
      logIn = (
        <p className="log-in-notification">
          Want to add a review? Click here to <a onClick={this.redirectTo}>Log In</a>!
        </p>
      );
    }

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
        <div className="review-index">
          {logIn}
        </div>
      );
    } else {
      return (
        <div className="review-index">
          <h1>Recommended Reviews</h1>
          {logIn}
          <ul className='review-item-list group'>
            {form}
            {
              this.props.reviews.map(function(review, idx){
                return <ReviewItemDisplay
                  key={idx}
                  review={review}
                  restaurant_id={this.props.restaurant.id}
                  restaurantName={this.props.restaurant.title}  />;
              }.bind(this))
            }
          </ul>
        </div>
      );
    }

  }
});
