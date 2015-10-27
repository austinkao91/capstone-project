var TagIndex = React.createClass({
  getInitialState: function() {
    return {tags: TagStore.all(), limit: true};
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
  take: function(tag, limit) {
    var tagArray = [];
    var filterTag = FilterStore.all().tags;
    var count = 0;
    for(var key in filterTag) {
      if(filterTag[key]) { count++; }
    }

    if(limit - count < 0 ) {
      for(var j = 0; j < tag.length; j++) {
        if(filterTag[tag[j].title]) {
          tagArray.push(tag[j]);
        }
      }
    } else {
      for(var i = 0; i < tag.length; i++) {
        if(tagArray.length <= limit && filterTag[tag[i].title]) {
          tagArray.push(tag[i]);
          count--;
        } else if (tagArray.length < limit - count) {
          tagArray.push(tag[i]);
        }
      }

    }
    return tagArray;
  },
  toggleExpand: function() {
    this.setState({limit: !this.state.limit});
  },
  render: function() {
    var tags;
    if(this.state.limit) {
      tags = this.take(this.state.tags,3);
      return (
        <div className="tag-index">
          <ul>
            {
              tags.map(function(tag, idx){
                return <TagItem tag={tag} key={idx}/>;
              }.bind(this))
            }
            <li onClick={this.toggleExpand} className="tag-item">
              More Tags >>
            </li>
          </ul>
        </div>
      );
    } else {
      tags = this.state.tags;
      return (
        <div className="tag-index">
          <ul>
            <li onClick={this.toggleExpand} className="tag-item">
              {"<< Less Tags"}
            </li>
            {
              tags.map(function(tag, idx){
                return <TagItem tag={tag} key={idx}/>;
              }.bind(this))
            }
          </ul>
        </div>
      );
    }
  }
});
