# == Schema Information
#
# Table name: restaurants
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  street_address :string           not null
#  zip_code       :integer          not null
#  state          :string           not null
#  phone_number   :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Restaurant < ActiveRecord::Base
  STATE_ARRAY = %w(AK AL AR AZ CA CO CT DC DE FL GA HI IA ID IL IN KS KY LA MA MD ME MI MN MO MS MT NC ND NE NH NJ NM NV NY OH OK OR PA RI SC SD TN TX UT VA VT WA WI WV WY)
  validates :title, :street_address, :zip_code, :phone_number, :state, :city, presence: true
  validates :state, inclusion: {in: Restaurant::STATE_ARRAY}

  has_many :reviews
  has_many :taggings
  has_many :tags, through: :taggings

  def self.filter_by(filters)
    if(filters[:tags])
      Restaurant.exclusive_tag_filter(filters[:tags])
    else
      Restaurant.none
    end
  end

  def self.exclusive_tag_filter(tags)
    Restaurant.joins(taggings: :tag).where( tags: { title: tags } )
  end

end
