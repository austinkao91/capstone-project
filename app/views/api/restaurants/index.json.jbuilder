json.array!(@restaurant) do |restaurant|
  json.extract!(restaurant, :id, :title, :street_address, :zip_code, :reviews, :lat, :lng)
  json.city(restaurant.location.city)
  json.state(restaurant.location.state)
  json.tags do
    json.array!(restaurant.tags) do |tag|
      json.extract!(tag, :title)
    end
  end
end
