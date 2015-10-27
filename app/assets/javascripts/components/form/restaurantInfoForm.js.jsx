var RestaurantInfoForm = React.createClass({
  render: function() {
    return (
      <form className="restaurant-form-info" onSubmit={this.props.onSubmit}>
        <label id="restaurant-name">
            Restaurant Name
          <input type="text" className="form-control"></input>
        </label>
        <br/>
        <label id="tag">
          Tag
          <select className='form-control'>
            {
              TagConstants.TAGS.map(function(tag, idx){
                return <option key={idx} value={tag}>{tag}</option>;
              })
            }
          </select>
        </label>
        <label id="price-range">
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
        <button type="submit"
              className="restaurant-form-submit group">
                <div className="glyphicon glyphicon-star "/>
                <p>&nbsp;Add Restaurant&nbsp;</p>
        </button>
      </form>
    );
  }
});
