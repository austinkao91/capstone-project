(function(root) {
  'use strict';
  var _locations = [];

  root.LocationStore = $.extend({}, EventEmitter.prototype, {
    all: function() {

      return _locations.slice();
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
      var findLocation = {};
      _locations.forEach(function(location, idx) {
        if( location.id === id) { findLocation = location; }
      });
      return findLocation;
    },
    find_by_location: function(locationFilter) {
      var findLocation = {};
        debugger
      _locations.forEach(function(location) {
        if(location.city === locationFilter.city &&
              location.state === locationFilter.state) {
            findLocation = location;
        }
      });
      return findLocation;
    },
    dispatcherID: appDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case LocationConstants.LOCATIONS_RECEIVED:
          root.LocationStore.addLocation(payload);
          root.LocationStore.change(LocationConstants.CHANGE_EVENT);
          break;
        case LocationConstants.ONE_LOCATION_RECEIVED:
          root.LocationStore.replaceLocation(payload);
          root.LocationStore.change(LocationConstants.CHANGE_EVENT);
          break;
      }
    }),
    addLocation: function(payload) {
      _locations = payload.locations;
    },
    replaceLocation: function(payload) {
      _locations.forEach(function(location, idx) {
        if(location.id === payload.locations.id) {
          _locations[idx] = payload.locations;
        }
      });
    }
  });



}(this));
