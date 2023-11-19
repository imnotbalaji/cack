json.directMessages do 
    @dm_list.each do |dm|
        json.set! dm.id  do 
        json.id dm.id
        json.messages dm.messages.order(:created_at).pluck(:id)
        json.users dm.members.order(:created_at).pluck(:id)
        end 
    end 
end 


json.users do 
    @dm_list.each do |dm|
        dm.members.each do |member|
            json.set! member.id do 
                json.extract! member, :id, :email
            end 
    
        end 
    end
end 

