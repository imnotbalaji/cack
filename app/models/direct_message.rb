# == Schema Information
#
# Table name: direct_messages
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DirectMessage < ApplicationRecord

    #  uniqueness constraint - you cannot start a new DM between the same set of users
    #  Should also be adding a composite index in the database 
    # Custom_validation
    

    has_many :messages, as: :conversation, dependent: :destroy

    has_many :dm_members,
        primary_key: :id,
        foreign_key: :dm_id,
        class_name: :DirectMessageUser,
        dependent: :destroy

    has_many :members,
        through: :dm_members,
        source: :member



    def add_members(*users)
        # Probably should be adding by id ? - revisit later 
        users.each do |user|
            self.members << user
        end 
    end 

    # When someone creates a DM, then they must have a payload of users and a message

    




end
