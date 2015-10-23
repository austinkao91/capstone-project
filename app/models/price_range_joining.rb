class PriceRangeJoining < ActiveRecord::Base

  belongs_to :priceRange
  belongs_to :restaurant
end
