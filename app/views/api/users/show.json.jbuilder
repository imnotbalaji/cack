json.user do 
    json.extract! @user, :id,:email, :created_at, :updated_at
    json.directMessages @user.dms.pluck(:id)
end 