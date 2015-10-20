# == Schema Information
#
# Table name: restaurants
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  street_address :string           not null
#  zip_code       :integer          not null
#  city           :string           not null
#  state          :string           not null
#  phone_number   :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  lat            :integer
#  lng            :integer
#

class Restaurant < ActiveRecord::Base
  validates :title, :street_address, :zip_code, :phone_number, presence: true

  has_many :reviews
  has_many :taggings
  has_many :tags, through: :taggings
  has_one :locationTagging
  has_one :location, through: :locationTagging

  def self.filter_by(filters)
    restaurant = Restaurant.all
    filters.each do |key, value|
      if(key == 'tags')
        restaurant = restaurant.merge(Restaurant.exclusive_tag_filter(value))
      elsif (key == 'location')
        restaurant = restaurant.merge(Restaurant.location_filter(value))
      end
    end
    restaurant
  end

  def self.location_filter(location)
    city = location[0]
    state = location[1]
    Restaurant.joins(locationTagging: :location).where(locations: {city: city, state: state})
  end

  def self.exclusive_tag_filter(tags)
    Restaurant.joins(taggings: :tag).where( tags: { title: tags } )
  end

  def tag_list=(tags_string)
    tag_titles = tags_string.split(",").collect{|s| s.strip.downcase}.uniq
    new_or_found_tags = tag_titles.collect do |title|
      Tag.find_or_create_by(title: title)
    end
    self.tags = new_or_found_tags
  end

  def location_array=(location_array)
    city = location_array[0]
    state = location_array[1]
    debugger
    new_or_found_location = Location.find_or_create_by(city: city, state: state)
    self.location = new_or_found_location
  end
end
