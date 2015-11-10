Location.create!([
  {city: "San Francisco", state: "CA", lat: 37.7749295, lng: -122.4194155},
  {city: "Berkeley", state: "CA", lat: 37.8715926, lng: -122.272747},
  {city: "Sunnyvale", state: "CA", lat: 37.36883, lng: -122.0363496},
])
LocationTagging.create!([
])
Picture.create!([

])
PriceRange.create!([
  {min: 0, max: 10},
  {min: 10, max: 20},
  {min: 20, max: 35},
  {min: 35, max: 9999}
])
PriceRangeJoining.create!([

])
Restaurant.create!([
])
Review.create!([
])
Tag.create!([
])
Tagging.create!([
])
User.create!([
  {username: "totoro", password_digest: "$2a$10$HYMF/Gzj3Sct4Jdpld7ae.2FBTwAyKhhsMPBMP91ur7DyL9AXRlfm", session_token: "EQs84z-TDFQ8F8gblMHzWA", image_url: "https://res.cloudinary.com/omnombloop/image/upload/c_limit,h_60,w_90/v1445890872/glw2s0fr0trdtuzclsio.png"},
  {username: "ian", password_digest: "$2a$10$7PGrtacutZwEU6Vxq37Mr.r8KsjYllF32XQEwFjq7DaDEqtyZ0UhC", session_token: "U2COmoEzm9R3IIh1RUCLlQ", image_url: "https://res.cloudinary.com/omnombloop/image/upload/v1445819452/anonymousUser_rb4i4l.png"}
])
