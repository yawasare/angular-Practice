require 'rails_helper'

RSpec.describe "pays/show", type: :view do
  before(:each) do
    @pay = assign(:pay, Pay.create!(
      :name => "Name",
      :url => "Url",
      :payoffurl => "Payoffurl"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Url/)
    expect(rendered).to match(/Payoffurl/)
  end
end
