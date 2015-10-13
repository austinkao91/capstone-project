var RestaurantItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function() {
    var showURL = "restaurant/" + this.props.restaurant.id;
    this.history.pushState(null, showURL);
  },
  render: function() {
    var restaurant = this.props.restaurant;
    var address = restaurant.address + " " + restaurant.state + " " + restaurant.zip_code;
    return(
      <li className={"restaurant-item"}>
        {"Title: " + this.props.restaurant.title}
        {"Address: " + address}
        {"Phone number: " + this.props.restaurant.phone_number}
      </li>
    );
  }
});

var PokemonIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function () {
    var showURL = "pokemon/" + this.props.pokemon.id;

    this.history.pushState(null, showURL);
  },
  render: function() {
    return(
      <li onClick={this.showDetail} className={"poke-list-item"}>
        {"Name: " + this.props.pokemon.name}
        {"Type: " + this.props.pokemon.poke_type}
      </li>
    );
  }
});
