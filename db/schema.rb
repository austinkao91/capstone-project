# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151106040556) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "location_taggings", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.integer "location_id",   null: false
  end

  add_index "location_taggings", ["location_id"], name: "index_location_taggings_on_location_id", using: :btree
  add_index "location_taggings", ["restaurant_id", "location_id"], name: "index_location_taggings_on_restaurant_id_and_location_id", unique: true, using: :btree

  create_table "locations", force: :cascade do |t|
    t.string   "city",       null: false
    t.string   "state",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float    "lat"
    t.float    "lng"
  end

  create_table "pictures", force: :cascade do |t|
    t.string   "name"
    t.integer  "imageable_id"
    t.string   "imageable_type"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "pictures", ["imageable_id"], name: "index_pictures_on_imageable_id", using: :btree

  create_table "price_range_joinings", force: :cascade do |t|
    t.integer "priceRange_id", null: false
    t.integer "restaurant_id", null: false
  end

  add_index "price_range_joinings", ["restaurant_id", "priceRange_id"], name: "index_price_range_joinings_on_restaurant_id_and_priceRange_id", using: :btree
  add_index "price_range_joinings", ["restaurant_id"], name: "index_price_range_joinings_on_restaurant_id", unique: true, using: :btree

  create_table "price_ranges", force: :cascade do |t|
    t.integer  "min",        null: false
    t.integer  "max",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.string   "title",          null: false
    t.string   "street_address", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.float    "lat"
    t.float    "lng"
  end

  create_table "reviews", force: :cascade do |t|
    t.text     "body",          null: false
    t.integer  "rating",        null: false
    t.integer  "restaurant_id", null: false
    t.integer  "user_id",       null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "reviews", ["restaurant_id"], name: "index_reviews_on_restaurant_id", using: :btree
  add_index "reviews", ["user_id", "restaurant_id"], name: "index_reviews_on_user_id_and_restaurant_id", unique: true, using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",        null: false
    t.integer  "restaurant_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "taggings", ["restaurant_id"], name: "index_taggings_on_restaurant_id", using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                            null: false
    t.string   "password_digest",                                                                                                     null: false
    t.string   "session_token",                                                                                                       null: false
    t.datetime "created_at",                                                                                                          null: false
    t.datetime "updated_at",                                                                                                          null: false
    t.string   "image_url",       default: "https://res.cloudinary.com/omnombloop/image/upload/v1445819452/anonymousUser_rb4i4l.png"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
