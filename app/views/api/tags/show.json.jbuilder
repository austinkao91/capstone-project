json.extract!(@tag, :title, :id)
json.restaurant do
  json.arrays!(@tag.restaurants) do |restaurant|
    json.extract!(restaurant, :reviews, :title, :street_address, :state, :zip_code, :city)
  end
end
