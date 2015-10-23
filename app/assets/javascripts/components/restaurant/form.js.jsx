var RestaurantForm = React.createClass({
  componentDidMount: function() {
    if(typeof window.CURRENT_USER_ID === "undefined") {
      window.location = "/session/new";
    }
  },
  submitForm: function(event) {
    event.preventDefault();
    var title = event.currentTarget[0].value;
    var street_address = event.currentTarget[1].value;
    var zip_code = parseInt(event.currentTarget[2].value);
    var location_array = [event.currentTarget[3].value, event.currentTarget[4].value];
    var tag_list = event.currentTarget[5].value;
    ApiUtil.create({
      title: title,
      street_address: street_address,
      zip_code: zip_code,
      location_array: location_array,
      tag_list: tag_list
    });
  },
  render: function() {
    return (
      <div>

        <div className="header group"/>
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
                Tag
                <select className='form-control'>
                  {
                    TagConstants.TAGS.map(function(tag, idx){
                      return <option key={idx} value={tag}>{tag}</option>;
                    })
                  }
                </select>
              </label>
              <label>
                Price Range
                <select className='form-control'>
                  {
                    PriceRangeConstants.PRICERANGES.map(function(priceRange, idx){
                      return <option key={idx} value={idx+1}>{priceRange}</option>;
                    })
                  }
                </select>
              </label>
              <br/>
              <input type="submit" value="Add new restaurant!"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
});
