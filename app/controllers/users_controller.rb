class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    if (user_params[:password] == user_params[:password_confirm])
      @user = User.new(user_params)
      if @user.save
        sign_in(@user)
        redirect_to root_url
      else
        flash.now[:errors] = @user.errors.full_messages
        render:new
      end
    else
      flash.now[:errors] = ["Passwords do not match!"]
      @user = User.new(user_params)
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirm)
  end
end
