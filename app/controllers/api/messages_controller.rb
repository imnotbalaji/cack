class Api::MessagesController < ApplicationController

    def create 
        @dm = DirectMessage.find_by(id: params[:direct_message_id])
        @message = Message.create(body: params[:message][:body],conversation: @dm, author_id: current_user.id)

        render '/api/direct_messages/show'

    end 
    def message_params

        params.require(:message).permit(:body)
        

    end 
end