class Api::UserController < ApplicationController
  def show
    @user = User.where(id: params[:id]).includes(reviews: :restaurant)[0]
    render :show
  end

end
