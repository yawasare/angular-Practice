require 'rails_helper'

RSpec.describe "pays/new", type: :view do
  before(:each) do
    assign(:pay, Pay.new(
      :name => "MyString",
      :url => "MyString",
      :payoffurl => "MyString"
    ))
  end

  it "renders new pay form" do
    render

    assert_select "form[action=?][method=?]", pays_path, "post" do

      assert_select "input#pay_name[name=?]", "pay[name]"

      assert_select "input#pay_url[name=?]", "pay[url]"

      assert_select "input#pay_payoffurl[name=?]", "pay[payoffurl]"
    end
  end
end
