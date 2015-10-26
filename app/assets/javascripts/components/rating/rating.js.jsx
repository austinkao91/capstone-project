var Rating = React.createClass({
  componentWillMount:function() {
    this.rates = [1,2,3,4,5];
  },
  render: function() {
    return (
      <div className="rating" data-rate={this.props.rating}>
        {
          this.rates.map(function(rate, idx){
            return (<RatingStar
              rate={rate}
              key={idx}/>);
          }.bind(this))
        }
      </div>
    );
  }
});
