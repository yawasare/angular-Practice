class ImagesController < ApplicationController
  before_filter :authorize  
  before_action :set_image, only: [:show, :edit, :update, :destroy]
  before_action :set_project

  respond_to :html

  def index 
    @images = Image.all.where(:project_id => @project.id)
    respond_with(@images)
  end

  def show
    respond_with(@image)
  end

  def new  
    @image = Image.new
    respond_with(@image)
  end

  def edit
  end

  def create
    @image = Image.new(image_params)
    @image.project_id = @project.id
    @image.save
    respond_with(@project,@image)
  end

  def update
    @image.update(image_params)
    respond_with(@project, @image)
  end

  def destroy
    @image.destroy
    respond_with(@project,@image)
  end

  private
    def set_image
      @image = Image.find(params[:id])
    end

    def set_project
      @project = Project.find(params[:project_id])
    end

    def image_params
      params.require(:image).permit(:name, :original, :final, :height, :width)
    end
end
