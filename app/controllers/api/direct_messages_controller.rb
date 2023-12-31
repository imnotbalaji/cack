class Api::DirectMessagesController < ApplicationController
  wrap_parameters include: DirectMessage.attribute_names + ['members','body'] 
  def index
    @user = current_user
    @dm_list = @user.dms.includes(:messages, :members)
    ActionCable.server.broadcast("DirectMessagesIndexChannel", from_template('/api/direct_messages/index',"@dm_list": @dm_list))
    # ActionCable.server.broadcast ("RoomsIndexChannel", from_template('api/rooms/index', rooms: @rooms))
    # render :index
  end

  def show 
    # render json: {message: "testing the DM show route"}
    @dm = DirectMessage.find_by(id: params[:id])

    render :show


  end 

  def create
    # @params = 
    # render json: 
    @dm = DirectMessage.create()
    member_list = params[:direct_message][:members]
    member_list << current_user.id
    @dm.members = member_list.map{|memId| User.find(memId)}
    message = Message.create(body: params[:direct_message][:body], author: current_user, conversation: @dm)
    @user = current_user
    @dm_list = @user.dms.includes(:messages, :members)
    ActionCable.server.broadcast("DirectMessagesIndexChannel", from_template('/api/direct_messages/index',"@dm_list": @dm_list))

    render :show
  end
  private
  def direct_message_params
    params.require(:direct_message).permit(:members)

  end 
  
end
