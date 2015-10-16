var TagActions = {
  receiveTag: function(data) {
    var payload = {
      tags: data,
      actionType: TagConstants.ONE_TAG_RECEIVED
    };
    appDispatcher.dispatch(payload);
  },
  receiveAllTags: function(data) {
    var payload = {
      tags: data,
      actionType: TagConstants.TAGS_RECEIVED
    };
    appDispatcher.dispatch(payload);
  }
};
