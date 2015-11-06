Location.create!([
  {city: "San Francisco", state: "CA", lat: 37.7749295, lng: -122.4194155},
  {city: "Saratoga", state: "CA", lat: 37.2638324, lng: -122.0230146},
  {city: "Anchorage", state: "AK", lat: 61.2180556, lng: -149.9002778},
  {city: "Berkeley", state: "CA", lat: 37.8715926, lng: -122.272747},
  {city: "Sunnyvale", state: "CA", lat: 37.36883, lng: -122.0363496},
  {city: "Fremont", state: "CA", lat: 37.5482697, lng: -121.9885719}
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
  {restaurant_id: 11, location_id: 5},
  {restaurant_id: 12, location_id: 2},
  {restaurant_id: 13, location_id: 4},
  {restaurant_id: 14, location_id: 6},
  {restaurant_id: 15, location_id: 4}
])
Picture.create!([
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1445445756/sr0r0stzwc89g0kjamjw.png", imageable_id: 1, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1445448702/vt7p8qrxoklget18ia0q.jpg", imageable_id: 5, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1445892352/yvcpo82tipspgdtxuval.jpg", imageable_id: 1, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1445966751/cyl9ht0vzglnsv62fjtv.jpg", imageable_id: 15, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1445966939/tsc8gcolzsfsgktx3fco.jpg", imageable_id: 4, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1446578361/dcqud4pshfpiudtqovci.jpg", imageable_id: 2, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1446578484/g7jq1gl7qqrozsnd5g5j.jpg", imageable_id: 8, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1446578679/feoaexmvuv8qfla740v7.jpg", imageable_id: 9, imageable_type: "Restaurant"}
])
PriceRange.create!([
  {min: 0, max: 10},
  {min: 10, max: 20},
  {min: 20, max: 35},
  {min: 35, max: 9999}
])
PriceRangeJoining.create!([
  {priceRange_id: 1, restaurant_id: 1},
  {priceRange_id: 2, restaurant_id: 2},
  {priceRange_id: 2, restaurant_id: 3},
  {priceRange_id: 1, restaurant_id: 4},
  {priceRange_id: 3, restaurant_id: 5},
  {priceRange_id: 2, restaurant_id: 6},
  {priceRange_id: 2, restaurant_id: 7},
  {priceRange_id: 1, restaurant_id: 8},
  {priceRange_id: 1, restaurant_id: 9},
  {priceRange_id: 2, restaurant_id: 10},
  {priceRange_id: 1, restaurant_id: 11},
  {priceRange_id: 1, restaurant_id: 12},
  {priceRange_id: 2, restaurant_id: 13},
  {priceRange_id: 4, restaurant_id: 14},
  {priceRange_id: 4, restaurant_id: 15}
])
Restaurant.create!([
  {title: "Totoro's Sushi", street_address: "16 Jessie Street", lat: 37.7899349, lng: -122.398961},
  {title: "Pig's Sushi", street_address: "23 Mission Street", lat: 37.7932428, lng: -122.393179},
  {title: "Andrew's White Boy Food", street_address: "16 Montgomery Street", lat: 37.7892657, lng: -122.4020498},
  {title: "Ian's Banana Pho ong", street_address: "5th Street", lat: 37.779049, lng: -122.4018621},
  {title: "Austin's Weeb Shop", street_address: "12270 mellowood Dr", lat: 37.289665, lng: -122.006232},
  {title: "Alaskan food", street_address: "3211 Providence Dr", lat: 61.1907778, lng: -149.818113},
  {title: "Gypsy's", street_address: "2519 Durant Ave", lat: 37.868098, lng: -122.2581362},
  {title: "Tu Lan", street_address: "8 6th St", lat: 37.7818232, lng: -122.4102034},
  {title: "Saigon Sandwich", street_address: "560 Larkin St", lat: 37.7831495, lng: -122.417374},
  {title: "MJ's cafe", street_address: "87 McCallister St", lat: 37.7807801, lng: -122.4132711},
  {title: "Palace Korean BBq", street_address: "1092 E El Camino Real #1", lat: 37.351591, lng: -122.0014525},
  {title: "Totoro Store", street_address: "12270 Mellowood Dr", lat: 37.289665, lng: -122.006232},
  {title: "totoro", street_address: "3344 University Ave", lat: 37.8723764, lng: -122.2661668},
  {title: "Alex's hut", street_address: "3730 Grimmer Ave", lat: 37.5254017, lng: -121.9696492},
  {title: "David's Smoke House", street_address: "2233 College Ave", lat: 37.8692877, lng: -122.254584}
])
Review.create!([
  {body: "best restaurant ever!", rating: 5, restaurant_id: 5, user_id: 1},
  {body: "most decent restaurant ever!", rating: 4, restaurant_id: 4, user_id: 1},
  {body: "most sighful restaurant ever!", rating: 3, restaurant_id: 4, user_id: 2},
  {body: "YAYYY", rating: 5, restaurant_id: 1, user_id: 1},
  {body: "BANANA PHONE", rating: 4, restaurant_id: 3, user_id: 1},
  {body: "most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!most ok restaurant ever!", rating: 5, restaurant_id: 5, user_id: 2},
  {body: "most delicious meat ever", rating: 4, restaurant_id: 15, user_id: 1},
  {body: "best sushi ever", rating: 4, restaurant_id: 1, user_id: 2},
  {body: "Best sushi ever, the sashimi is great", rating: 5, restaurant_id: 2, user_id: 1},
  {body: "pretty ok tu lan", rating: 4, restaurant_id: 8, user_id: 1},
  {body: "CHEAPEST SANDWICHES EVER", rating: 5, restaurant_id: 9, user_id: 1}
])
Tag.create!([
  {title: "Japanese"},
  {title: "Italian"},
  {title: "Cajun"},
  {title: "German"},
  {title: "American"}
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
  {tag_id: 2, restaurant_id: 11},
  {tag_id: 3, restaurant_id: 12},
  {tag_id: 4, restaurant_id: 13},
  {tag_id: 1, restaurant_id: 14},
  {tag_id: 5, restaurant_id: 15}
])
User.create!([
  {username: "totoro", password_digest: "$2a$10$HYMF/Gzj3Sct4Jdpld7ae.2FBTwAyKhhsMPBMP91ur7DyL9AXRlfm", session_token: "EQs84z-TDFQ8F8gblMHzWA", image_url: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1445890872/glw2s0fr0trdtuzclsio.png"},
  {username: "ian", password_digest: "$2a$10$7PGrtacutZwEU6Vxq37Mr.r8KsjYllF32XQEwFjq7DaDEqtyZ0UhC", session_token: "U2COmoEzm9R3IIh1RUCLlQ", image_url: "http://res.cloudinary.com/omnombloop/image/upload/v1445819452/anonymousUser_rb4i4l.png"}
])
