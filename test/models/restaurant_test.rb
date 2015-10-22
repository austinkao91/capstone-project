# == Schema Information
#
# Table name: restaurants
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  street_address :string           not null
#  zip_code       :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  lat            :float
#  lng            :float
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
