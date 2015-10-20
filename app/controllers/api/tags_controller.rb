class Api::TagsController < ApplicationController
  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else
      flash[:errors] = @tag.errors.full_messages
      render status: 422
    end
  end

  def index
    @tag = Tag.all.includes(restaurants: :location)
  end

  def show
    @tag = Tag.find_by(id: params[:id]).includes(restaurants: :reviews).includes(restaurants: :location)
  end

  private
  def tag_params
    params.require(:tag).permit(:title)
  end
end
