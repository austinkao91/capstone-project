var RestaurantForm = React.createClass({

  submitForm: function(event) {
    event.preventDefault();
    var title = event.currentTarget[0].value;
    var street_address = event.currentTarget[1].value;
    var zip_code = event.currentTarget[2].value;
    var state = event.currentTarget[3].value;
    var phone_number= event.currentTarget[4].value;
  },
  render: function() {
    return (
      <div className="restaurant-form">
        <form onSubmit={this.submitForm}>
          <label>
              Restaurant Name
            <input type="text"></input>
          </label>
          <br/>
          <label>
            Street Address
            <input type="text"></input>
          </label>
          <br/>
          <label>
            Zip Code
            <input type="text"></input>
          </label>
          <br/>
          <label>
            State
            <select>
              {
                StateConstants.STATES.map(function(state, idx){
                  return <option key={idx} value={state}>{state}</option>;
                })
              }
            </select>
          </label>
          <br/>
          <label>
            Phone Number
            <input type="text"></input>
          </label>
          <input type="submit" value="Add new restaurant!"></input>
        </form>
      </div>
    );
  }
});
