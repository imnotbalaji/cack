# == Schema Information
#
# Table name: direct_message_users
#
#  id         :bigint           not null, primary key
#  dm_id      :bigint           not null
#  member_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DirectMessageUser < ApplicationRecord
    # Joins table 
    
    
    # Associations
        belongs_to :dm,
            primary_key: :id,
            foreign_key: :dm_id,
            class_name: :DirectMessage

        belongs_to :member,
            primary_key: :id,
            foreign_key: :member_id,
            class_name: :User



end
