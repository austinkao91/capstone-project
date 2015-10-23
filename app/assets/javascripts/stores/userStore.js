(function(root) {
  'use strict';
  var _users = {};
  var _currentUser= {};

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return $.extend(true, {}, _users);
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
        case UserConstants.ADD_USER:
          root.UserStore.addUser(payload);
          root.UserStore.change(UserConstants.CHANGE_EVENT);
          break;
        case UserConstants.ADD_CURRENT_USER:
          root.UserStore.addCurrentUser(payload);
          break;
      }
    }),
    addUser: function(payload) {
      _users = payload.user;
    },
    addCurrentUser: function(payload) {
      _currentUser = payload.user;
    }

  });



}(this));
