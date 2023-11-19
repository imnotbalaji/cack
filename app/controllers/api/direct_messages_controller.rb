class Api::DirectMessagesController < ApplicationController
  def index
    @user = current_user
    @dm_list = @user.dms.includes(:messages, :members)
    render :index
  end

  def show 
    # render json: {message: "testing the DM show route"}
    @dm = DirectMessage.find_by(id: params[:id])

    render :show


  end 

  def create
    # @params = 
    # render json: 
    render json: params
  end
  private
  
end
