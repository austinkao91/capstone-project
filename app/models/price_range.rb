class PriceRange < ActiveRecord::Base
  validates :min, :max, presence: true

  has_many :priceRangeJoinings
  has_many :restaurants, through: :priceRangeJoinings
end
