class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  helper_method :login!

  def login!
    session[:user_id] = @user.id
  end
  
end
