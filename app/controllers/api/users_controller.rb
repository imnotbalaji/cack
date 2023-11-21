class Api::UsersController < ApplicationController


  wrap_parameters include: User.attribute_names + ['password'] 

  def index
    @users = User.all
    render :index
  end 
  
  def create
    
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else 

      render json: @user.errors.full_messages, status: :unprocessable_entity

    end 
  end

  def show
  end 

  private 

  def user_params
    params.require(:user).permit(:email, :password)
  end 

end
