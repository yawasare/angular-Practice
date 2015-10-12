require 'rails_helper'

RSpec.describe "pays/edit", type: :view do
  before(:each) do
    @pay = assign(:pay, Pay.create!(
      :name => "MyString",
      :url => "MyString",
      :payoffurl => "MyString"
    ))
  end

  it "renders the edit pay form" do
    render

    assert_select "form[action=?][method=?]", pay_path(@pay), "post" do

      assert_select "input#pay_name[name=?]", "pay[name]"

      assert_select "input#pay_url[name=?]", "pay[url]"

      assert_select "input#pay_payoffurl[name=?]", "pay[payoffurl]"
    end
  end
end
