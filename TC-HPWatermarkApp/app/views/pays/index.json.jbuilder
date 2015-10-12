json.array!(@pays) do |pay|
  json.extract! pay, :id, :name, :url, :payoffurl
  json.url pay_url(pay, format: :json)
end
