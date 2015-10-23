(function(root) {
  'use strict';
  var _filters = {
    tags: {},
    location: {city: "San Francisco", state: "CA"},
    priceRange: {price: null},
    locationBound: {center_lat: null, center_lng: null , radius: null},
    holder: 0
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
        case FilterConstants.TOGGLE_TAG_FILTER:
          root.FilterStore.toggleTagFilter(payload);
          root.FilterStore.change(FilterConstants.CHANGE_EVENT);
          break;
        case FilterConstants.ADD_FILTER:
          root.FilterStore.addFilter(payload);
          root.FilterStore.change(FilterConstants.CHANGE_EVENT);
          break;
        case FilterConstants.TOGGLE_OBJECT_FILTER:
          root.FilterStore.toggleObjectFilter(payload);
          root.FilterStore.change(FilterConstants.CHANGE_EVENT);
          break;
      }
    }),

    toggleObjectFilter: function(payload) {
      var filterProp = Object.keys(payload.filter)[0];
      var filter = payload.filter;
      var locationFilter = _filters[filterProp];
      var filterKeys = Object.keys(filter);
      var matches = 0;

      filterKeys.forEach(function(props) {
         if (filter[props] === locationFilter[props]) {
           matches += 1;
         }
      });

      if ( matches === filterKeys.length ) {
        for(var props in locationFilter) {
          locationFilter[props] = null;
        }
      } else {
        _filters[filterProp] = $.extend(true, {}, filter)[filterProp];
      }
    },

    toggleTagFilter: function(payload) {
      debugger
      var filter = payload.filter.tags;
      var tagFilter = _filters.tags;
      for(var i = 0; i < filter.length; i++ ) {
        if (filter[i] in tagFilter) {
          tagFilter[filter[i]] = !tagFilter[filter[i]];
        } else {
          tagFilter[filter[i]] = true;
        }
      }
    },
    addTagFilter: function(filter) {
      debugger
      var tagFilter = {};
      for(var i = 0; i < filter.length; i++ ) {
        tagFilter[filter[i]] = true;
      }
      _filters.tags = tagFilter;
    },
    addObjectFilter: function(props, filter) {
      debugger
      for(var params in filter) {
        _filters.props.params = filter.params;
      }
    },
    addFilter: function(payload) {
      debugger
      for (var props in payload.filter) {
        if(props === "tags") {
          this.addTagFilter(payload.filter[props]);
        } else {
          this.addObjectFilter(props, payload.filter[props]);
        }
      }
    },
  });
}(this));
