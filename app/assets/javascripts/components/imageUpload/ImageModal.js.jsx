var ImageModal = React.createClass({
  getInitialState: function() {
    return {currentIdx: 0};
  },
  rightClick: function(event) {
    event.preventDefault();
    var newIdx = (this.state.currentIdx + 1)%this.props.imathisges.length;
    this.setState({currentIdx: newIdx});
  },
  leftClick: function(event) {
    event.preventDefault();
    var newIdx = (this.state.currentIdx - 1);
    if(newIdx < 0) {
      newIdx = newIdx + this.props.images.length;
    }
    newIdx = newIdx%this.props.images.length;
    this.setState({currentIdx: newIdx});
  },
  render: function() {
    var currentImage = this.props.images[this.state.currentIdx];
    var limit = this.props.images.length;
    if(this.props.show) {
      return (
        <div className="modal-show">
          <div className="slideshow">
            <pageButton
              class="slideshow"
              current={this.props.currentIdx}
              pageLimit={limit}
              action={this.leftClick}
              mark="prev"/>
            <img src={currentImage.name}></img>
            <pageButton
              class="slideshow"
              current={this.props.currentIdx}
              pageLimit={limit}
              action={this.rightClick}
              mark="next"/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="modal-hide"></div>
      )
    }
  }
});
