(function(root) {
  'use strict';
  var _filters = {
    tags: []
  };

  root.FilterStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return $.extend(true, {}, _filters);
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
    dispatcherID: appDispatcher.register( function (payload) {
      switch (payload.actionType) {
      }
    }),
    addFilter: function(payload) {
      for (var props in payload.filters) {
        _filters[props] = payload.filters[props];
      }
    }
  });
}(this));
