class Api::UserController < ApplicationController
  def show
    @user = User.where(id: params[:id]).includes(reviews: :restaurant)[0]
    render :show
  end


  def update
    if params[:id].to_i != current_user.id
      @user = User.new
      render :show, status: 404
    else
      @user = User.find(params[:id])
      if @user.update(user_params)
        @user = User.where(id: params[:id]).includes(reviews: {restaurant: :pictures})[0]
        render :show
      else
        flash[:errors] = @user.errors.full_messages
        render :show, status: 422
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:image_url, :bookMark)
  end
end
