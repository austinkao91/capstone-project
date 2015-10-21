var FilterActions = {
  toggleLocationFilter: function(data) {
    var payload = {
      filter: data,
      actionType: FilterConstants.TOGGLE_LOCATION_FILTER
    };
    appDispatcher.dispatch(payload);
  },
  toggleTagFilter: function(data){
    var payload = {
      filter: data,
      actionType: FilterConstants.TOGGLE_TAG_FILTER
    };
    appDispatcher.dispatch(payload);
  },
  addFilters: function(data) {
    var payload = {
      filter: data,
      actionType: FilterConstants.ADD_FILTER
    };
    appDispatcher.dispatch(payload);
  }
};