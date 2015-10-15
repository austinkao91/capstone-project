class Tag < ActiveRecord::Base
  validates :title, presence: true

  has_many :taggings
  has_many :restaurants, through: :taggings
end
