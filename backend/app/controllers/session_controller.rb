class SessionController < ApplicationController

  # to be edited

  def create
    if params[:user]
      @user = User.find_by_email(params[:user][:email])
      if @user && @user.authenticate(params[:user][:password])
        session[:user_id] = @user.id
      else
        render json: {error: "User Cannot be Authenticated"}
      end
    else
      render json: {error: "User Cannot be Authenticated"}
    end
  end

  def destroy
    reset_session
    render json: { message: "session ended" }
  end

end
