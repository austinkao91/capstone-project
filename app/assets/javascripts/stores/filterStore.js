(function(root) {
  'use strict';
  var _filters = {
    tags: {},
    location: {city: "San Francisco", state: "CA"},
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
        case FilterConstants.TOGGLE_TAG_FILTER:
          root.FilterStore.toggleTagFilter(payload);
          root.FilterStore.change(FilterConstants.CHANGE_EVENT);
          break;
        case FilterConstants.ADD_FILTER:
          root.FilterStore.addFilter(payload);
          root.FilterStore.change(FilterConstants.CHANGE_EVENT);
          break;
        case FilterConstants.TOGGLE_LOCATION_FILTER:
          root.FilterStore.toggleLocationFilter(payload);
          root.FilterStore.change(FilterConstants.CHANGE_EVENT);
          break;
      }
    }),

    toggleLocationFilter: function(payload) {
      var filter = payload.filter.location;
      var locationFilter = _filters.location;
      if (locationFilter.city === filter.city && locationFilter.state === filter.state) {
        locationFilter.city = null;
        locationFilter.state = null;
      } else {
        locationFilter.city = filter.city;
        locationFilter.state = filter.state;
      }
    },

    toggleTagFilter: function(payload) {
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
      var tagFilter = {};
      debugger;
      for(var i = 0; i < filter.length; i++ ) {
        tagFilter[filter[i]] = true;
      }
      _filters.tags = tagFilter;
    },
    addLocationFilter: function(filter) {
      _filters.location.city = filter.city;
      _filters.location.state = filter.state;
    },
    addFilter: function(payload) {
      for (var props in payload.filter) {
        if(props === "tags") {
          this.addTagFilter(payload.filter[props]);
        } else if (props === "location") {
          this.addLocationFilter(payload.filter[props]);
        }
      }
    },
  });
}(this));
