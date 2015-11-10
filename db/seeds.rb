Location.create!([
  {city: "San Francisco", state: "CA", lat: 37.7749295, lng: -122.4194155},
  {city: "Berkeley", state: "CA", lat: 37.8715926, lng: -122.272747},
  {city: "Sunnyvale", state: "CA", lat: 37.36883, lng: -122.0363496}
])
LocationTagging.create!([
  {restaurant_id: 1, location_id: 1},
  {restaurant_id: 2, location_id: 1},
  {restaurant_id: 3, location_id: 1},
  {restaurant_id: 4, location_id: 1},
  {restaurant_id: 5, location_id: 1},
  {restaurant_id: 6, location_id: 1},
  {restaurant_id: 7, location_id: 1},
  {restaurant_id: 8, location_id: 1},
  {restaurant_id: 9, location_id: 1},
  {restaurant_id: 10, location_id: 2},
  {restaurant_id: 11, location_id: 2},
  {restaurant_id: 12, location_id: 2},
  {restaurant_id: 13, location_id: 2},
  {restaurant_id: 14, location_id: 2},
  {restaurant_id: 15, location_id: 3}
])
Picture.create!([
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447112522/uirowucd2tmqvb60mudt.jpg", imageable_id: 1, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447112539/vzte2cpztnetcafidvts.jpg", imageable_id: 1, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447112714/dipqg1b63zfag6p1j79o.jpg", imageable_id: 2, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447112807/el3iddfrvj3p9kj2n5jw.jpg", imageable_id: 3, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447113223/s34kap0onbrg9szmyyse.jpg", imageable_id: 4, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447114602/iohddagxc05dzwei00b8.png", imageable_id: 5, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447114807/ltkzxpufvr56yzvizdgy.jpg", imageable_id: 6, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447115028/anitydnjyjegrp01znnp.jpg", imageable_id: 7, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447115549/otsa3nybqiuxwlwimhl6.jpg", imageable_id: 8, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447115721/vq8dozif6tuu1ssyv60z.jpg", imageable_id: 9, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447116097/fp8rqsn7askh9krxyk18.jpg", imageable_id: 10, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447116343/lgbwbutal62ybp6olylo.jpg", imageable_id: 11, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447116581/ec1xdvernczjzctd2o3b.jpg", imageable_id: 12, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447116747/zyeqxshmscifi8339yh0.jpg", imageable_id: 13, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447117099/yghchtg5m9ylvo7z3ykb.jpg", imageable_id: 14, imageable_type: "Restaurant"},
  {name: "http://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1447117455/wedrh7jg2uuk9ar2pqya.jpg", imageable_id: 15, imageable_type: "Restaurant"}
])
PriceRange.create!([
  {min: 0, max: 10},
  {min: 10, max: 20},
  {min: 20, max: 35},
  {min: 35, max: 9999}
])
PriceRangeJoining.create!([
  {priceRange_id: 1, restaurant_id: 1},
  {priceRange_id: 1, restaurant_id: 2},
  {priceRange_id: 4, restaurant_id: 3},
  {priceRange_id: 2, restaurant_id: 4},
  {priceRange_id: 1, restaurant_id: 5},
  {priceRange_id: 2, restaurant_id: 6},
  {priceRange_id: 2, restaurant_id: 7},
  {priceRange_id: 2, restaurant_id: 8},
  {priceRange_id: 1, restaurant_id: 9},
  {priceRange_id: 1, restaurant_id: 10},
  {priceRange_id: 1, restaurant_id: 11},
  {priceRange_id: 2, restaurant_id: 12},
  {priceRange_id: 1, restaurant_id: 13},
  {priceRange_id: 1, restaurant_id: 14},
  {priceRange_id: 3, restaurant_id: 15}
])
Restaurant.create!([
  {title: "Tu Lan", street_address: "8 6th Street", lat: 37.7818232, lng: -122.4102034},
  {title: "Oriental", street_address: "1063 Market Street", lat: 37.780863, lng: -122.41148},
  {title: "Ian's Banana Pho Ong", street_address: "2323 Van Ness", lat: 37.797242, lng: -122.424111},
  {title: "Andrew's White Boy Shop", street_address: "1077 Market Street", lat: 37.7808855, lng: -122.4120031},
  {title: "Alvin's Wizard Restaurant", street_address: "5646 Market Street", lat: 37.7519003, lng: -122.4429624},
  {title: "Dim Sum", street_address: "1034 Fell Street", lat: 37.774436, lng: -122.4348842},
  {title: "Farmer Brown's", street_address: "16 Jessie Street", lat: 37.7899349, lng: -122.398961},
  {title: "Philz Coffee", street_address: "3737 Post Street", lat: 37.7834907, lng: -122.4459825},
  {title: "David's donut shop", street_address: "4555 Geary Street", lat: 37.7807677, lng: -122.468273},
  {title: "Gypsy's", street_address: "2519 Durant Ave", lat: 37.868098, lng: -122.2581362},
  {title: "Top Dog", street_address: "2160 Center Street", lat: 37.8703302, lng: -122.2662833},
  {title: "Barney's", street_address: "1600 Shattuck Ave", lat: 37.8781148, lng: -122.2693882},
  {title: "TC Garden", street_address: "2507 Hearst Avenue", lat: 37.8751353, lng: -122.2600439},
  {title: "Cafe Strada", street_address: "2323 College Ave", lat: 37.868617, lng: -122.2544747},
  {title: "Palace Korean BBQ Buffet", street_address: "1092 E El Camino Real", lat: 37.351591, lng: -122.0014525}
])
Review.create!([
  {body: "One of my favorite vietnamese places to eat at!", rating: 4, restaurant_id: 1, user_id: 1},
  {body: "Its cheap and good for the price!", rating: 3, restaurant_id: 2, user_id: 1},
  {body: "Most expensive banana phone ever", rating: 4, restaurant_id: 3, user_id: 1},
  {body: "So white", rating: 2, restaurant_id: 4, user_id: 1},
  {body: "this place is magical", rating: 4, restaurant_id: 5, user_id: 1},
  {body: "Great deal for the price!", rating: 4, restaurant_id: 6, user_id: 1},
  {body: "Great waffles", rating: 3, restaurant_id: 7, user_id: 1},
  {body: "This place is alright, the mint mojito is legit", rating: 3, restaurant_id: 8, user_id: 1},
  {body: "Would die for the apple fritters", rating: 5, restaurant_id: 9, user_id: 1},
  {body: "I love the mango habanero hot dog, my to go place at 2 am", rating: 5, restaurant_id: 11, user_id: 1},
  {body: "Cheap food, loads of pasta, friendly service, what more could you ask for!", rating: 4, restaurant_id: 10, user_id: 1},
  {body: "A very solid burger, but the chefs tend to cook things on the rarer side", rating: 4, restaurant_id: 12, user_id: 1},
  {body: "Prices have been going up and food has gotten worse, would avoid", rating: 2, restaurant_id: 13, user_id: 1},
  {body: "Great cofee and nice sit down place to study", rating: 4, restaurant_id: 14, user_id: 1},
  {body: "Don't like the sprinkles, not worth ti", rating: 3, restaurant_id: 9, user_id: 3},
  {body: "the shu mai is the greatest", rating: 5, restaurant_id: 6, user_id: 3},
  {body: "The coffee here put me to sleep...", rating: 2, restaurant_id: 8, user_id: 3},
  {body: "i love bananas, what can i say", rating: 5, restaurant_id: 3, user_id: 3},
  {body: "They promised me a free oreo and I didn't get one", rating: 1, restaurant_id: 4, user_id: 3},
  {body: "I come here all the time, so cheap!", rating: 3, restaurant_id: 2, user_id: 3},
  {body: "24 is where it's at, best vermicelli + imperial rolls ever", rating: 5, restaurant_id: 1, user_id: 3},
  {body: "Too pricey for my taste", rating: 5, restaurant_id: 7, user_id: 3},
  {body: "It's alright... Not as good as Gen BBQ", rating: 3, restaurant_id: 15, user_id: 3}
])
Tag.create!([
  {title: "Vietnamese"},
  {title: "Chinese"},
  {title: "American"},
  {title: "Italian"},
  {title: "Korean"}
])
Tagging.create!([
  {tag_id: 1, restaurant_id: 1},
  {tag_id: 2, restaurant_id: 2},
  {tag_id: 1, restaurant_id: 3},
  {tag_id: 3, restaurant_id: 4},
  {tag_id: 2, restaurant_id: 5},
  {tag_id: 2, restaurant_id: 6},
  {tag_id: 3, restaurant_id: 7},
  {tag_id: 3, restaurant_id: 8},
  {tag_id: 3, restaurant_id: 9},
  {tag_id: 4, restaurant_id: 10},
  {tag_id: 3, restaurant_id: 11},
  {tag_id: 3, restaurant_id: 12},
  {tag_id: 2, restaurant_id: 13},
  {tag_id: 3, restaurant_id: 14},
  {tag_id: 5, restaurant_id: 15}
])
User.create!([
  {username: "ian", password_digest: "$2a$10$7PGrtacutZwEU6Vxq37Mr.r8KsjYllF32XQEwFjq7DaDEqtyZ0UhC", session_token: "U2COmoEzm9R3IIh1RUCLlQ", image_url: "https://res.cloudinary.com/omnombloop/image/upload/v1445819452/anonymousUser_rb4i4l.png"},
  {username: "totoro", password_digest: "$2a$10$HYMF/Gzj3Sct4Jdpld7ae.2FBTwAyKhhsMPBMP91ur7DyL9AXRlfm", session_token: "0eri61BG4eR_q0c2Fu74vg", image_url: "https://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1445890872/glw2s0fr0trdtuzclsio.png"},
  {username: "Ian", password_digest: "$2a$10$jSKbj8jrW41idkgeTjV7FeIi9HjNjnYlT76aRrMHDIn.DCRSJ24ki", session_token: "oYW25rcayrVFouBEY6Mgpw", image_url: "https://res.cloudinary.com/omnombloop/image/upload/v1445819452/anonymousUser_rb4i4l.png"}
])
