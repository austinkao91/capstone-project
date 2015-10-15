# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#  title          :string           not null
#  street_address :string           not null
#  zip_code       :integer          not null
#  state          :string           not null
#  phone_number   :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null

Restaurant.create!({
  title: "Totoro's Sushi",
  street_address: "16 Jessie Street",
  zip_code: 94102 ,
  phone_number: "(408)497-5442",
  state: "CA",
  city: "San Francisco"
})
Restaurant.create!({
  title: "Pig's Sushi",
  street_address: "23 Mission Street",
  zip_code: 94102 ,
  phone_number: "(408)342-6442",
  state: "CA",
  city: "San Francisco"
})
Restaurant.create!({
  title: "Ian's Banana Pho ong",
  street_address: "5th Street",
  zip_code: 94102 ,
  phone_number: "(408)123-3222",
  state: "CA",
  city: "San Francisco"
})
Restaurant.create!({
  title: "Andrew's White Boy Food",
  street_address: "16 Montgomery Street",
  zip_code: 94102 ,
  phone_number: "(408)766-3445",
  state: "CA",
  city: "San Francisco"
})
Restaurant.create!({
  title: "Austin's Weeb Shop",
  street_address: "12270 mellowood Dr",
  zip_code: 95070,
  phone_number: "(407)334-4444",
  state: "CA",
  city: "Saratoga"
})

User.create!({
  username: "totoro",
  password: "password",
  password_confirm: "password"
})
User.create!({
  username: "ian",
  password: "password",
  password_confirm: "password"
})

Review.create!({
  body: "best restaurant ever!",
  restaurant_id: 5,
  user_id: 1,
  rating: 5
})
Review.create!({
  body: "most ok restaurant ever!",
  restaurant_id: 5,
  user_id: 2,
  rating: 3
})
Review.create!({
  body: "most decent restaurant ever!",
  restaurant_id: 4,
  user_id: 1,
  rating: 4
})
Review.create!({
  body: "most sighful restaurant ever!",
  restaurant_id: 4,
  user_id: 2,
  rating: 3
})
