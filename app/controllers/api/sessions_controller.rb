class Api::SessionsController < ApplicationController
  
  def show
    
    if (logged_in?) 
    @user = current_user
    render '/api/users/show'
    else 
    render json: {"user": nil}
    end
  end

  def create

    @user = User.find_by_credentials(params[:email],params[:password])

    if (@user)
      login!(@user)
      render '/api/users/show'

    else
      render json: {errors: ['Invalid credentials']}, status: :unauthorized 
    end 

  end

  def destroy
    logout!
    render json: {message: 'success'}
  end


end
