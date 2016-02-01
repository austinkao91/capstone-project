class Api::LocationsController < ApplicationController
  def create
    @location = Location.new(location_params)
    if @location.save
      render :show
    else
      flash[:errors] = @location.errors.full_messages
      render status: 422
    end
  end

  def update
    @location = Location.find(params[:id])
    if @location.update(location_params)
      @location = Location.where(id: params[:id]).includes(restaurants: :reviews).includes(restaurants: :tags)[0]
      render :show
    else
      flash[:errors] = @location.errors.full_messages
      render status: 422
    end
  end

  def index
    @location = Location.all
  end

  def show
    @location = Location.where(id: params[:id]).includes(restaurants: :reviews).includes(restaurants: :tags)[0]
  end

  private
  def location_params
    params.require(:location).permit(:city, :state, :lat, :lng)
  end
end
