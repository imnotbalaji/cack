# == Schema Information
#
# Table name: messages
#
#  id                :bigint           not null, primary key
#  body              :text             not null
#  author_id         :bigint           not null
#  conversation_type :string           not null
#  conversation_id   :bigint           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Message < ApplicationRecord
  validates :body, presence: true
  



  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :conversation, polymorphic: true
end
