# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  body          :text             not null
#  rating        :integer          not null
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ActiveRecord::Base
  validates :user_id, :restaurant_id, :rating, :body, presence: true
  validates :user_id, uniqueness: {scope: :restaurant_id}
  belongs_to :user
  belongs_to :restaurant

  def reviewId=(reviewId)
  end
end
