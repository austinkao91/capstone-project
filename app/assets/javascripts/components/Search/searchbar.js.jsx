var SearchBar = React.createClass({
  getInitialState: function() {
    return {input: "", focus: false};
  },
  onChange: function(e) {
    e.preventDefault();
    this.setState({input: e.target.value});
  },
  selectResult: function(e) {
    e.preventDefault();
    this.setState({input: e.target.innerText});
  },
  matches: function() {
    var matches = [];
    var store = [];
    if(this.props.id === "tags") {
      store = TagStore.all();
    } else if(this.props.id === "location") {
      store = LocationStore.all();
    }
    if(this.state.input.length === 0 ) {
      for(var i = 0; i < 5; i++) {
        if(typeof store[i] !== "undefined") {
          matches.push(store[i].title);
        }
      }
      return matches;
    }

    store.forEach(function(elem){
      var sub = elem.title.slice(0,this.state.input.length);
      if(sub.toLowerCase() === this.state.input.toLowerCase()) {
        matches.push(elem.title);
      }
    }.bind(this));
    if(matches.length === 0) {
      matches.push("No Matches");
    }
    return matches;
  },
  blur: function() {
    this.setState({focus: false});
  },
  focus: function() {
    this.setState({focus: true});
  },
  render: function() {
    var results = [];
    if( this.state.focus ) {
      results = this.matches();
    }
    return (
      <div className="form-group">
        <input type="text"
           onChange={this.onChange}
           className="form-control"
           placeholder={this.props.placeholder}
           id={this.props.id}
           onBlur={this.blur}
           onFocus={this.focus}
           value={this.state.input}/>
         <div className="search-result">
          <ul className="search-result-list">
            {
              results.map(function (result,idx) {
                return <li key={idx} onMouseDown={this.selectResult}>{result}</li>;
              }.bind(this))
            }
          </ul>
        </div>
      </div>

    );
  }
});
