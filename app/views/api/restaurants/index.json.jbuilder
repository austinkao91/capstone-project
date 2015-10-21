json.array!(@restaurant) do |restaurant|
  json.extract!(restaurant, :id, :title, :street_address, :zip_code, :reviews, :pictures, :lat, :lng, :phone_number)
  json.city(restaurant.location.city)
  json.state(restaurant.location.state)
  json.tags do
    json.array!(restaurant.tags) do |tag|
      json.extract!(tag, :title)
    end
  end
end
