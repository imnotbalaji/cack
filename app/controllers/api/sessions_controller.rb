class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]
  before_action :require_logged_out, only: [:create]

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
      render json: {errors: ['Sorry, but those credentials are invalid.']}, status: :unauthorized 
    end 

  end

  def destroy
    logout!
    render json: {message: 'success'}
  end


end
