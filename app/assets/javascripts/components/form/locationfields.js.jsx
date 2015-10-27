var LocationField = React.createClass({
  render: function() {
      return (
        <form className="restaurant-form-location" onSubmit={this.props.submitLocation}>
          <label id="street-address">
            Street Address
            <input type="text"
              className="form-control"/>
          </label>
          <br/>
          <label id="city">
            City
            <input type="text" className="form-control"></input>
          </label>
          <br/>
          <label id="states">
            State
            <select className='form-control'>
              {
                StateConstants.STATES.map(function(state, idx){
                  return <option key={idx} value={state}>{state}</option>;
                })
              }
            </select>
          </label>
          <br/>
          <button type="submit"
                className="restaurant-form-submit group">
                  <div className="glyphicon glyphicon-star "/>
                  <p>&nbsp;Check Location&nbsp;</p>
          </button>
        </form>
      );
    }
});
