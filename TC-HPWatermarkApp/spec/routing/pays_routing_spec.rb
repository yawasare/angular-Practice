require "rails_helper"

RSpec.describe PaysController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/pays").to route_to("pays#index")
    end

    it "routes to #new" do
      expect(:get => "/pays/new").to route_to("pays#new")
    end

    it "routes to #show" do
      expect(:get => "/pays/1").to route_to("pays#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/pays/1/edit").to route_to("pays#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/pays").to route_to("pays#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/pays/1").to route_to("pays#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/pays/1").to route_to("pays#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/pays/1").to route_to("pays#destroy", :id => "1")
    end

  end
end
