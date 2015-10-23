Location.create!([
  {city: "San Francisco", state: "CA", lat: 37.7749295, lng: -122.4194155},
  {city: "Saratoga", state: "CA", lat: 37.2638324, lng: -122.0230146},
  {city: "Anchorage", state: "AK", lat: 61.2180556, lng: -149.9002778},
  {city: "Berkeley", state: "CA", lat: 37.8715926, lng: -122.272747},
  {city: "Sunnyvale", state: "CA", lat: 37.36883, lng: -122.0363496}
])
LocationTagging.create!([
  {restaurant_id: 1, location_id: 1},
  {restaurant_id: 2, location_id: 1},
  {restaurant_id: 3, location_id: 1},
  {restaurant_id: 4, location_id: 1},
  {restaurant_id: 5, location_id: 2},
  {restaurant_id: 6, location_id: 3},
  {restaurant_id: 7, location_id: 4},
  {restaurant_id: 8, location_id: 1},
  {restaurant_id: 9, location_id: 1},
  {restaurant_id: 10, location_id: 1},
  {restaurant_id: 11, location_id: 5}
])
Picture.create!([
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1445445756/sr0r0stzwc89g0kjamjw.png", imageable_id: 1, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1445448702/vt7p8qrxoklget18ia0q.jpg", imageable_id: 5, imageable_type: "Restaurant"}
])
Restaurant.create!([
  {title: "Totoro's Sushi", street_address: "16 Jessie Street", zip_code: 94102,  lat: 37.7899349, lng: -122.398961},
  {title: "Pig's Sushi", street_address: "23 Mission Street", zip_code: 94102, lat: 37.7932428, lng: -122.393179},
  {title: "Andrew's White Boy Food", street_address: "16 Montgomery Street", zip_code: 94102,  lat: 37.7892657, lng: -122.4020498},
  {title: "Ian's Banana Pho ong", street_address: "5th Street", zip_code: 94102, lat: 37.779049, lng: -122.4018621},
  {title: "Austin's Weeb Shop", street_address: "12270 mellowood Dr", zip_code: 95070,  lat: 37.289665, lng: -122.006232},
  {title: "Alaskan food", street_address: "3211 Providence Dr", zip_code: 99507,  lat: 61.1907778, lng: -149.818113},
  {title: "Gypsy's", street_address: "2519 Durant Ave", zip_code: 94704,  lat: 37.868098, lng: -122.2581362},
  {title: "Tu Lan", street_address: "8 6th St", zip_code: 94103,  lat: 37.7818232, lng: -122.4102034},
  {title: "Saigon Sandwich", street_address: "560 Larkin St", zip_code: 94102, lat: 37.7831495, lng: -122.417374},
  {title: "MJ's cafe", street_address: "87 McCallister St", zip_code: 94102,  lat: 37.7807801, lng: -122.4132711},
  {title: "Palace Korean BBq", street_address: "1092 E El Camino Real #1", zip_code: 94087,  lat: 37.351591, lng: -122.0014525}
])
Review.create!([
  {body: "best restaurant ever!", rating: 5, restaurant_id: 5, user_id: 1},
  {body: "most ok restaurant ever!", rating: 3, restaurant_id: 5, user_id: 2},
  {body: "most decent restaurant ever!", rating: 4, restaurant_id: 4, user_id: 1},
  {body: "most sighful restaurant ever!", rating: 3, restaurant_id: 4, user_id: 2},
  {body: "YAYYY", rating: 5, restaurant_id: 1, user_id: 1},
  {body: "BANANA PHONE", rating: 4, restaurant_id: 3, user_id: 1}
])
Tag.create!([
  {title: "Japanese"},
  {title: "Italian"}
])
Tagging.create!([
  {tag_id: 1, restaurant_id: 1},
  {tag_id: 2, restaurant_id: 2},
  {tag_id: 1, restaurant_id: 3},
  {tag_id: 1, restaurant_id: 4},
  {tag_id: 2, restaurant_id: 5},
  {tag_id: 1, restaurant_id: 6},
  {tag_id: 2, restaurant_id: 7},
  {tag_id: 2, restaurant_id: 8},
  {tag_id: 2, restaurant_id: 9},
  {tag_id: 1, restaurant_id: 10},
  {tag_id: 2, restaurant_id: 11}
])
User.create!([
  {username: "ian", password_digest: "$2a$10$7PGrtacutZwEU6Vxq37Mr.r8KsjYllF32XQEwFjq7DaDEqtyZ0UhC", session_token: "jDeOE_FkyY5BCIdx17IRTg", image_url: "http://res.cloudinary.com/dnifqmdlf/image/upload/v1444929813/images_ohgzbq.png"},
  {username: "totoro", password_digest: "$2a$10$HYMF/Gzj3Sct4Jdpld7ae.2FBTwAyKhhsMPBMP91ur7DyL9AXRlfm", session_token: "AnG5d5TJDsejljHT8E9PKg", image_url: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1445448726/pmdrnnchxoev0ln3sdh9.png"}
])

PriceRange.create!(min: 0, max: 10)
PriceRange.create!(min:10, max: 20)
PriceRange.create!(min:20, max: 35)
PriceRange.create!(min:35, max: 9999)

PriceRangeJoining.create!([
    {priceRange_id: 1,restaurant_id: 1},
    {priceRange_id: 2,restaurant_id: 2},
    {priceRange_id: 2,restaurant_id: 3},
    {priceRange_id: 1,restaurant_id: 4},
    {priceRange_id: 3,restaurant_id: 5},
    {priceRange_id: 2,restaurant_id: 6},
    {priceRange_id: 2,restaurant_id: 7},
    {priceRange_id: 1,restaurant_id: 8},
    {priceRange_id: 1,restaurant_id: 9},
    {priceRange_id: 2,restaurant_id: 10},
    {priceRange_id: 1,restaurant_id: 11}
])
