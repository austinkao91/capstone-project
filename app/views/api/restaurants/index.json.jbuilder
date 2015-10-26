json.array!(@restaurant) do |restaurant|
  json.extract!(restaurant, :id, :title, :street_address, :reviews, :pictures, :lat, :lng )
  json.priceRange(restaurant.priceRange.id)
  json.city(restaurant.location.city)
  json.state(restaurant.location.state)
  json.tags do
    json.array!(restaurant.tags) do |tag|
      json.extract!(tag, :title)
    end
  end
end
