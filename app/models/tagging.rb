# == Schema Information
#
# Table name: taggings
#
#  id            :integer          not null, primary key
#  tag_id        :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Tagging < ActiveRecord::Base
  belongs_to :tag
  belongs_to :restaurant
end
