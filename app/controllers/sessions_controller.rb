class SessionsController < ApplicationController
  before_action :redirect_to_root, only: [:new]
  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def guest_log_in
    sign_in(User.find(1))
    redirect_to root_url
  end

  def destroy
    sign_out
    render json: {}
  end

end
