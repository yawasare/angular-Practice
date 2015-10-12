class User < ActiveRecord::Base
  has_secure_password  
  has_many :projects
  validates :username, :email, :password, :client_id, :client_secret, presence: true
  validates :email, uniqueness: true
  validates :email, email_format: { message: "doesn't look like an email address" }
  attr_accessor :password_confirmation

  validates_confirmation_of :password
end
