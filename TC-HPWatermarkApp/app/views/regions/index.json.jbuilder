json.array!(@regions) do |region|
  json.extract! region, :id, :name, :top_left_x, :top_left_y, :width, :height, :original, :watermark, :watermark_strength, :watermark_resolution, :link, :trigger
  json.url region_url(region, format: :json)
end
