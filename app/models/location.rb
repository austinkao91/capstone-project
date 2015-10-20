# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  city       :string           not null
#  state      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ActiveRecord::Base
  validates :city, :state, presence: true, uniqueness: true

  has_many :restaurants, through: :location_taggings
  has_many :location_taggings
end
