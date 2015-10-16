var FilterActions = {
  
  addFilter: function(data){
    var payload = {
      filter: data,
      actionType: FilterConstants.ADD_FILTER
    };
    appDispatcher.dispatch(payload);
  }
};
