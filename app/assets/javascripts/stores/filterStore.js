(function(root) {
  'use strict';
  var _filters = {
    tags: {},
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
    toggleTagFilter: function(filter) {
      var tagFilter = _filters.tags;
      for(var i = 0; i < filter.length; i++ ) {
        if (filter[i] in tagFilter) {
          tagFilter[filter[i]] = !tagFilter[filter[i]];
        } else {
          tagFilter[filter[i]] = true;
        }
      }
    },
    addFilter: function(payload) {
      for (var props in payload.filter) {
        if(props === "tags") {
          this.toggleTagFilter(payload.filter[props]);
        } else {
          _filters[props] = payload.filter[props];
        }
      }
    }
  });
}(this));
