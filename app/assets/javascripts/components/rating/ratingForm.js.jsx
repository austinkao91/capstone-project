var RatingForm = React.createClass({
  getInitialState:function() {
    return {rating: 0, defaultIdx: 0};
  },
  componentWillMount: function(){
    this.rates = [1,2,3,4,5];
  },
  handleHover: function(event) {
    event.preventDefault();
    var rating = parseInt(event.currentTarget.className[0]).toFixed(1);
    this.setState({ rating: rating});
  },
  handleClick: function(event) {
    event.preventDefault();
    var defaultIdx = parseInt(event.target.className[0]).toFixed(1);
    this.props.setRating(defaultIdx);
    this.setState({defaultIdx: defaultIdx});
  },
  handleLeave: function() {
    this.setState({rating: this.state.defaultIdx});
  },
  render: function() {
    return (
      <div className="rating-form"
        data-rate={this.state.rating}
        onMouseLeave={this.handleLeave}>
        {
          this.rates.map(function(rate, idx){
            return (<RatingStar
              rate={rate}
              key={idx}
              onMouseOver={this.handleHover}
              onClick={this.handleClick} />);
          }.bind(this))
        }
        <h5>Select Your rating.</h5>

      </div>
    );
  }
});
