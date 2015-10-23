# == Schema Information
#
# Table name: restaurants
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  street_address :string           not null
#  zip_code       :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  lat            :float
#  lng            :float
#

class Restaurant < ActiveRecord::Base
  validates :title, :street_address, :zip_code, presence: true

  has_many :reviews
  has_many :taggings
  has_many :tags, through: :taggings
  has_one :locationTagging
  has_one :location, through: :locationTagging
  has_many :pictures, :as => :imageable
  has_one :priceRangeJoining
  has_one :priceRange, through: :priceRangeJoining

  def self.filter_by(filters)
    restaurant = Restaurant.all
    filters.each do |key, value|
      if (key == 'location')
        restaurant = restaurant.merge(Restaurant.location_filter(value))
      elsif (key == 'tags' && value != [""])
        restaurant = restaurant.merge(Restaurant.exclusive_tag_filter(value))
      elsif (key == 'priceRange')
        restaurant = restaurant.merge(Restaurant.priceRange_filter(value))
      end
    end
    restaurant
  end

  def self.priceRange_filter(priceRange)
    Restaurant.joins(priceRangeJoining: :priceRange).where(price_ranges: {id: priceRange})

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
    tag_titles = tags_string.split(",").collect{|s| s.strip.downcase.capitalize}.uniq
    new_or_found_tags = tag_titles.collect do |title|
      Tag.find_or_create_by(title: title)
    end
    self.tags = new_or_found_tags
  end

  def location_array=(location_array)
    city = location_array[0]
    state = location_array[1]
    new_or_found_location = Location.find_or_create_by(city: city, state: state)
    self.location = new_or_found_location
  end

  def image_url=(image_url)
    new_or_found_pictures = Picture.find_or_create_by(name: image_url)
    self.pictures << new_or_found_pictures
  end
end
