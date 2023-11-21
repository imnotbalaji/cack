# == Schema Information
#
# Table name: direct_messages
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DirectMessage < ApplicationRecord



    has_many :messages, as: :conversation, dependent: :destroy

    has_many :dm_members,
        primary_key: :id,
        foreign_key: :dm_id,
        class_name: :DirectMessageUser,
        dependent: :destroy

    has_many :members,
        through: :dm_members,
        source: :member



    # When someone creates a DM, then they must have a payload of users and a message

    




end
