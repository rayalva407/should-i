class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: session_params[:username])
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end


end