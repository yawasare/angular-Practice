require 'carrierwave/orm/activerecord'

class Project < ActiveRecord::Base
    belongs_to :user
    has_many :images
    has_many :regions, through: :images  
    has_many :payoffs

    validates :name, :user_id, presence: true
    validates :name, uniqueness: true

    mount_uploader :logo, LogoUploader
end
