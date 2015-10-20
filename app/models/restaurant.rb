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

  def tag_list=(tags_string)
    tag_titles = tags_string.split(",").collect{|s| s.strip.downcase}.uniq
    new_or_found_tags = tag_titles.collect do |title|
      Tag.find_or_create_by(title: title)
    end
    self.tags = new_or_found_tags
  end

end
