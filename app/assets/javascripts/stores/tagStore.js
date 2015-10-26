(function(root) {
  'use strict';
  var _tags = [];

  root.TagStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _tags.slice();
    },
    addHandler: function(eventName, handler) {
      this.on(eventName, handler);
    },
    removeHandler: function(eventName, handler) {
      this.removeListener(eventName, handler);
    },
    change: function(eventName) {
      this.emit(eventName);
    },
    find: function(id) {
      var findTag = {};
      _tags.forEach(function(tag, idx) {
        if( tag.id === id) { findTag = tag; }
      });
      return findTag;
    },
    dispatcherID: appDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case TagConstants.TAGS_RECEIVED:
          root.TagStore.addTag(payload);
          root.TagStore.change(TagConstants.CHANGE_EVENT);
          break;
        case TagConstants.ONE_TAG_RECEIVED:
          root.TagStore.replaceTag(payload);
          root.TagStore.change(TagConstants.CHANGE_EVENT);
          break;
      }
    }),
    addTag: function(payload) {

      _tags = payload.tags;
    },
    replaceTag: function(payload) {

      _tags.forEach(function(tag, idx) {
        if(tag.id === payload.tags.id) {
          _tags[idx] = payload.tags;
        }
      });
    }
  });



}(this));
