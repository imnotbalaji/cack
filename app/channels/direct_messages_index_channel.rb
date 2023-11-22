class DirectMessagesIndexChannel < ApplicationCable::Channel
    def subscribed
        stream_from "DirectMessagesIndexChannel"
    end
end