json.extract!(@location, :city, :state, :id, :lat, :lng)
json.restaurant do
  json.arrays!(@location.restaurants) do |restaurant|
    json.extract!(restaurant, :reviews, :title, :street_address, :zip_code)
    json.city(restaurant.location.city)
    json.state(restaurant.location.state)
  end
end
