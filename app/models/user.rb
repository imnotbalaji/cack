# == Schema Information
#
# Table name: users
#
#  id                :bigint           not null, primary key
#  email             :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  display_name      :string
#  user_status       :string
#  profile_photo_url :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class User < ApplicationRecord
  has_secure_password

  before_validation :ensure_session_token

  validates :email, 
    uniqueness: true, 
    length: {in: 6..255},
    format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :session_token,
   presence: true, 
   uniqueness: true
  validates :password,
   length: {minimum: 6}, 
   allow_nil: true


  #  Association

   has_many :messages,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Message,
    inverse_of: :author,
    dependent: :destroy

    has_many :dm_members,
      primary_key: :id,
      foreign_key: :member_id,
      class_name: :DirectMessageUser,
      dependent: :destroy

    has_many :dms,
      through: :dm_members,
      source: :dm

  
   # Validation Methods 

   def self.find_by_credentials(email, password) 

    user = User.find_by(email: email)

    if user && user.authenticate(password) 
      return user
    else
      return nil
    end 

   end




  # Session Tokens

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    session_token
  end 


  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end 

  def generate_session_token 
    loop do 
      token = SecureRandom.urlsafe_base64
      return token if (!User.exists?(session_token: token))
    end 
  end 


end
