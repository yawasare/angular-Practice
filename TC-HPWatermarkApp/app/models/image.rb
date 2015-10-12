class Image < ActiveRecord::Base
    belongs_to :project
    has_many :regions

    validates :name, :project_id, :original, presence: true
    
    mount_uploader :original, ImageUploader
end
