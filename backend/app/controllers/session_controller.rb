class SessionController < ApplicationController

  # to be edited
  
  def create
    if params[:user]
      @user = User.find_by_email(params[:user][:email])
      if @user && @user.authenticate(params[:user][:password])
        session[:user_id] = @user.id
      else
        flash[:error] = "User Cannot be Authenticated"
        redirect_to(new_session_path)
      end
    else
      flash[:error] = "User cannot be Authenticated"
      redirect_to(new_session_path)
    end
  end

  def destroy
    reset_session
    render json: {message: "session ended"}
  end

end
