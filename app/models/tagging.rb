class Tagging < ActiveRecord::Base
  validates :restaurant_id, :tag_id, presence: true
  belongs_to :tag
  belongs_to :restaurant
end
