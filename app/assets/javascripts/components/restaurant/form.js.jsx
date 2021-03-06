var RestaurantForm = React.createClass({
  getInitialState: function() {
    return {
      street_address: "",
      location_array: [],
      checked: false
    };
  },
  componentDidMount: function() {
    if(typeof window.CURRENT_USER_ID === "undefined") {
      window.location = "/session/new";
    }
  },
  submitForm: function(event) {
    event.preventDefault();

    var title = event.currentTarget[0].value;
    var street_address = event.currentTarget[1].value;
    var location_array = [event.currentTarget[2].value, event.currentTarget[3].value];
    var tag_list = event.currentTarget[4].value;
    var price_range = parseInt(event.currentTarget[5].value);
    ApiUtil.create({
      title: title,
      street_address: street_address,
      location_array: location_array,
      tag_list: tag_list,
      price_range: price_range
    });
  },
  render: function() {
    var submitButton;
    if(this.state.checked) {

    } else {
      submitButton=(<button type="submit"
            className="restaurant-form-submit group">
              <div className="glyphicon glyphicon-star "/>
              <p>&nbsp;Check Location&nbsp;</p>
      </button>);
    }
    return (
      <div>
        <div className="index group">
          <div className="restaurant-form-contents">
            <h2>Is there a restaurant missing on OMNOMNOM?</h2>
            <p>Enter the information below to add it to our database!</p>
            <ClickMap getInfo={this.getInfo}/>
            <div className="restaurant-form">
              <form onSubmit={this.submitForm}>

                <label>
                  Street Address
                  <input type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.street_address}/>
                </label>
                <br/>
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
                      Restaurant Name
                    <input type="text" className="form-control"></input>
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

                {submitButton}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
