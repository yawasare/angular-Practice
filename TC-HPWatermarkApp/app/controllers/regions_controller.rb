class RegionsController < ApplicationController
  before_filter :authorize  
  before_action :set_region, only: [:show, :edit, :update, :destroy]
  before_action :set_image
  before_action :set_project
  respond_to :html

  def index
    @regions = Region.all
    respond_with(@regions)
  end

  def show
    respond_with(@region)
  end

  def new
    @region = Region.new
    respond_with(@region)
  end

  def edit
  end

  def create
    @region = Region.new(region_params)
    @region.image_id = @image.id
    @region.save
    respond_with(@project, @image, @region)
  end

  def update
    @region.update(region_params)
    respond_with(@project, @image, @region)
  end

  def destroy
    @region.destroy
    respond_with(@project, @image, @region)
  end

  private
    def set_region
      @region = Region.find(params[:id])
    end

    def region_params
      params.require(:region).permit(:name, :top_left_x, :top_left_y, :width, :height, :original, :watermark, :watermark_strength, :watermark_resolution, :link, :trigger)
    end

    def set_image
      @image = Image.find(params[:image_id])
    end

    def create_payoff
      @payoff = Payoff.new
    end

    def set_project
      @project = Project.find(@image.project_id)
    end
end
