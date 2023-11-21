class Api::MessagesController < ApplicationController

    def create 
        @dm = DirectMessage.find_by(id: params[:direct_message_id])
        @message = Message.create(body: params[:message][:body],conversation: @dm, author_id: current_user.id)


        DirectMessagesChannel.broadcast_to @message.conversation,
             from_template('api/direct_messages/show',  "@dm": @message.conversation)


        render json: nil, status: :ok

    end 
    def message_params

        params.require(:message).permit(:body)
        

    end 
end