# == Schema Information
#
# Table name: location_taggings
#
#  id            :integer          not null, primary key
#  restaurant_id :integer          not null
#  location_id   :integer          not null
#

class LocationTagging < ActiveRecord::Base
  validates :restaurant_id, :location_id, presence: true, uniqueness: true

  belongs_to :restaurant
  belongs_to :location
end
