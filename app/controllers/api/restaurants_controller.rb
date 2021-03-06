class Api::RestaurantsController < ApplicationController
  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      id = @restaurant.id
      @restaurant = Restaurant.where(id: id).includes(:tags).includes(reviews: :user).includes(:location).includes(:pictures).includes(:priceRange)
      render :show
    else
      flash[:errors] = @restaurant.errors.full_messages
      render :show
    end
  end

  def update
    @restaurant = Restaurant.find(params[:id])
    if @restaurant.update(restaurant_params)
      @restaurant = Restaurant.where(id: params[:id]).includes(:tags).includes(reviews: :user).includes(:location).includes(:pictures).includes(:priceRange)
      render :show
    else
      flash.now[:errors] = @restaurant.errors.full_messages
      render :status => :unprocessable_entity
    end
  end

  def show
    @restaurant = Restaurant.where(id: params[:id]).includes(:tags).includes(reviews: {user: :reviews}).includes(:location).includes(:pictures).includes(:priceRange)
  end

  def index
    # @restaurant = Restaurant.all.includes(:reviews
    @restaurant = Restaurant.filter_by(filter_params).includes(:reviews).includes(:tags).includes(:location).includes(:pictures).includes(:priceRange).uniq
  end


  #  title          :string           not null
  #  street_address :string           not null
  #  state          :string           not null
  #  created_at     :datetime         not null
  #  updated_at     :datetime         not null

  private
  def restaurant_params
    params.require(:restaurant).permit(
        :title,
        :street_address,
        :lat,
        :lng,
        :tag_list,
        :image_url,
        :price_range,
        {:location_array => []},
    )
  end

  def filter_params
    params.require(:filter).permit({:tags => []},
                                   {:location => []},
                                   {:locationBound => []},
                                   {:priceRange => []},
                                   :holder)
  end
end
