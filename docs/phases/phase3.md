### Phase 3: Review feature (1 day)


## Rails
### Models
* Review

### Controllers
* Api::ReviewsController (create, destroy, index, show, update)

### Views
* reviews/index.json.jbuilder
* reviews/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* NavigationIndex
  - RestaurantIndex
    -Restaurant
      -Restaurant Detail
      -ReviewIndex
        -ReviewForm
        -Reviews
  - UserProfile
    -Reviews
### Stores
* Review

### Actions
* ApiActions.receiveAllReviews
* ApiActions.receiveSingleReview
* ApiActions.deleteReview

### ApiUtil
* ApiUtil.fetchAllReviews
* ApiUtil.fetchSingleReview
* ApiUtil.createReview
* ApiUtil.editReview
* ApiUtil.destroyReview

## Gems/Libraries
