# FresherNote

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

FresherNote is a web application inspired by Evernote built using Ruby on Rails
and React.js. FresherNote allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, and edit restaurants
- [ ] Create, read, and edit reviews on restaurants
- [ ] Create, read, and edit tags for restaurants
- [ ] Add a map with restaurant locations

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1. User Auth, Restaurant model JSON API (1 days)

Create backend user auth / session / restaurant models. Hook up the restaurant model to an JSON API controller. User should have username, email, password, and session token. Restaurant should have location (map coordinates), business name, phone number, address.

[Details][phase-one]

### Phase 2: Basic Flux architecture (2 days)

Phase 2. Basic Flux architecture (2 days)
RestaurantIndex component will display all the restaurant components in the restaurant Store. The index component will interact with api util to make query requests such as fetch restaurants, update restaurants, and create new restaurants. Home page will be created which contains a list of recommended restaurants and a navigation bar. Clicking on a restaurant should pull up the details of the restaurant. The navigation bar will contain sign up and sign in links if the user is not logged in, a placeholder for a logo, and  navigation links. Will utilize bootstrap to style the website.

[Details][phase-two]

### Phase 3: Review feature (1 day)

Reviews have user id, rating, body, and restaurant id. Reviews belong to restaurants and users. JSON API should be able to create reviews, return all of the reviews for a given restaurant or user. The review components should belong to a review Index, which will be nested under the restaurant component. A restaurant will have a rating based off of the average of all its user reviews. There should be the ability to generate a review (only if logged in as a user), edit the review, and view other user's reviews.

[Details][phase-three]

### Phase 4: Tag feature (1 day)

Tags have a tagging id and a description. Taggings have many tags, restaurants have many taggings. JSON API should be able to return all tags and return all restaurants for a given tag. Nested under tag index, which is nested. JSON API should be nested underneath the restaurant tags.

[Details][phase-four]

### Phase 5: Search feature (2 day)

The map component should look to the restaurant store and make queries to determine which restaurants to show. Using the google maps api and google places api, we can take the street addresses and display the location on the map. We can then filter shown restaurants by matching the location text and tag text in the search bar.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Utilize faker to create seed data for restaurants, reviews, and users. Use bootstrap to clean up formatting of website



### Bonus Features (TBD)
- [ ] search for restaurants based on location
- [ ] Hovering over restaurant location displays information about restaurant
- [ ] display search radius
- [ ] add friends/restaurant recommendations based on friend reviews
- [ ] add photos

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
