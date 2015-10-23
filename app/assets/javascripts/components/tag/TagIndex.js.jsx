var TagIndex = React.createClass({
  getInitialState: function() {
    return {tags: TagStore.all()};
  },
  componentDidMount: function() {
    TagStore.addHandler(TagConstants.CHANGE_EVENT, this.getTags);
    if(TagStore.all().length === 0) {ApiUtil.fetchTags(); }
  },
  componentWillUnmount: function() {
    TagStore.removeHandler(TagConstants.CHANGE_EVENT, this.getTags);
  },
  getTags: function() {
    this.setState({tags: TagStore.all()});
  },
  render: function() {
    return (
      <div className="tag-index">
        <ul>
          {
            this.state.tags.map(function(tag, idx){
              return <TagItem tag={tag} key={idx}/>;
            })
          }
        </ul>
      </div>
    );
  }
});
