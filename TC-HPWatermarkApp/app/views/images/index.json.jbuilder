json.array!(@images) do |image|
  json.extract! image, :id, :name, :original, :final, :height, :width
  json.url image_url(image, format: :json)
end
