# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  city       :string           not null
#  state      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  lat        :float
#  lng        :float
#

class Location < ActiveRecord::Base
  validates :city, :state, presence: true
  STATE_ARRAY = %w(AK AL AR AZ CA CO CT DC DE FL GA HI IA ID IL IN KS KY LA MA MD ME MI MN MO MS MT NC ND NE NH NJ NM NV NY OH OK OR PA RI SC SD TN TX UT VA VT WA WI WV WY)
  validates :state, inclusion: {in: Location::STATE_ARRAY}

  has_many :restaurants, through: :locationTaggings
  has_many :locationTaggings
end
