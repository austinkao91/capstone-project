class Api::RestaurantsController < ApplicationController
  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      @restaurant = [@restaurant]
      render :show
    else
      flash[:errors] = @restaurant.errors.full_messages
      render :show
    end
  end

  def update
    @restaurant = Restaurant.find(params[:id])
    if @restaurant.update(restaurant_params)
      @restaurant = [@restaurant]
      render :show
    else
      flash.now[:errors] = @restaurant.errors.full_messages
      render :status => :unprocessable_entity
    end
  end

  def show
    @restaurant = Restaurant.where(id: params[:id]).includes(:tags).includes(reviews: :user)
  end

  def index
    # @restaurant = Restaurant.all.includes(:reviews
    #
    @restaurant = Restaurant.filter_by(filter_params).includes(:reviews).includes(:tags)
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
        :title, :street_address, :zip_code, :state, :phone_number, :city, :lat, :lng
    )
  end

  def filter_params
    params.require(:filter).permit({:tags => []}, :minPrice)
  end
end
