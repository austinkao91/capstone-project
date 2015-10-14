class Api::RestaurantsController < ApplicationController
  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render :show
    else
      flash.now[:errors] = @restaurant.errors.full_messages
      render :show
    end
  end

  def update
    @restaurant = restaurant.find(params[:id])
    if @restaurant.update(restaurant_params)
      render :show
    else
      flash.now[:errors] = @restaurant.errors.full_messages
      render :status => :unprocessable_entity
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def index
    @restaurant = Restaurant.all

  end


  #  title          :string           not null
  #  street_address :string           not null
  #  zip_code       :integer          not null
  #  state          :string           not null
  #  phone_number   :integer          not null
  #  created_at     :datetime         not null
  #  updated_at     :datetime         not null

  private
  def restaurant_params
    params.require(:restaurant).permit(
        :title, :street_address, :zip_code, :state, :phone_number
    )
  end
end
