require 'rails_helper'

RSpec.describe "pays/index", type: :view do
  before(:each) do
    assign(:pays, [
      Pay.create!(
        :name => "Name",
        :url => "Url",
        :payoffurl => "Payoffurl"
      ),
      Pay.create!(
        :name => "Name",
        :url => "Url",
        :payoffurl => "Payoffurl"
      )
    ])
  end

  it "renders a list of pays" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Url".to_s, :count => 2
    assert_select "tr>td", :text => "Payoffurl".to_s, :count => 2
  end
end
