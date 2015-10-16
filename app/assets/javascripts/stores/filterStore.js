(function(root) {
  'use strict';
  var _filters = {
    tags: [],
    minPrice: 0
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
        case FilterConstants.ADD_FILTER:
          root.FilterStore.addFilter(payload);
          root.FilterStore.change(FilterConstants.CHANGE_EVENT);
          break;
      }
    }),
    addFilter: function(payload) {
      for (var props in payload.filter) {
        if(props === "tags") {
          _filters[props].push(payload.filter[props]);
        } else {
          _filters[props] = payload.filter[props];
        }
      }
    }
  });
}(this));
