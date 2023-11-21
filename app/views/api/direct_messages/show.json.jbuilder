


json.directMessages do 
    json.set! @dm.id  do 
        json.id @dm.id
        json.messages @dm.messages.order(:created_at).pluck(:id)
        json.users @dm.members.pluck(:id)
        
    end 
end 

json.messages do 
    @dm.messages.each do |message|
        json.set! message.id do
            json.extract! message, :id, :body, :author_id, :created_at
            
        end        
    end 
end 

json.users do 
    @dm.members.each do |member|
        json.set! member.id do 
            json.extract! member, :id, :email
        end 

    end 
end 