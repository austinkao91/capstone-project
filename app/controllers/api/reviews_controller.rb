class Api::ReviewsController < ApplicationController
  before_action :validate_user, only: [:update]
  def index
    @review = Review.all
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id if current_user
    if @review.save
      render :show
    else
      flash[:errors] = @review.errors.full_messages
      render :show, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      flash[:errors] = @review.errors.full_messages
      render status: 422
    end
  end

  def destroy
    @review = Review.find(review_params[:reviewId])
    if(@review.user_id == current_user.id)
      @review.destroy
      render :show
    else
      render :show
    end
  end

  private
  def review_params
    params.require(:review).permit(:restaurant_id, :body, :rating, :reviewId)
  end

  def validate_user
    @review = Review.find(params[:id])
    if !current_user || current_user.id != @review.user_id
      redirect_to root_url
    end
  end

end
