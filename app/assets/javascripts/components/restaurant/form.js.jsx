var RestaurantForm = React.createClass({

  submitForm: function(event) {
    event.preventDefault();
    var title = event.currentTarget[0].value;
    var street_address = event.currentTarget[1].value;
    var zip_code = parseInt(event.currentTarget[2].value);
    var city = event.currentTarget[3].value;
    var state = event.currentTarget[4].value;
    var phone_number= event.currentTarget[5].value;
    ApiUtil.create({
      title: title,
      street_address: street_address,
      zip_code: zip_code,
      city: city,
      state:state,
      phone_number: phone_number
    });
  },
  render: function() {
    return (
      <div className="index group">

        <div className="restaurant-form">
          <form onSubmit={this.submitForm}>
            <label>
                Restaurant Name
              <input type="text" className="form-control"></input>
            </label>
            <br/>
            <label>
              Street Address
              <input type="text" className="form-control"></input>
            </label>
            <br/>
            <label>
              Zip Code
              <input type="text" className="form-control"></input>
            </label>
            <label>
              City
              <input type="text" className="form-control"></input>
            </label>
            <br/>
            <label>
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
            <label>
              Phone Number
              <input type="text" className="form-control"></input>
            </label>
            <input type="submit" value="Add new restaurant!"></input>
          </form>
        </div>
      </div>
    );
  }
});
