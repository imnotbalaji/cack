class Api::MessagesController < ApplicationController

    def create 
        @dm = DirectMessage.find_by(id: params[:direct_message_id])
        @message = Message.create(body: params[:message][:body],conversation: @dm, author_id: current_user.id)


        DirectMessagesChannel.broadcast_to @message.conversation,
             from_template('api/direct_messages/show',  "@dm": @message.conversation)


        render json: nil, status: :ok

    end 
   
    def update
        # message_id = params[:id]
        @message = Message.find(params[:id])
        @message.update(body: params[:message][:body])
        @dm = @message.conversation
        render '/api/direct_messages/show'
        # render json: {id: message_id, body: params[:message][:body],author_id: current_user.id}

    end 
    def message_params

        params.require(:message).permit(:body)
        

    end 
end