var UserActions = {
  receiveUser: function(data) {
    var payload = {
      user: data,
      actionType: UserConstants.ADD_USER
    };
  appDispatcher.dispatch(payload);
  }
};
