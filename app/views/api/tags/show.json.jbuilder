json.extract!(@tag, :title, :id)
json.restaurant do
  json.arrays!(@tag.restaurants) do |restaurant|
    json.extract!(restaurant, :reviews, :title, :street_address)
    json.city(restaurant.location.city)
    json.state(restaurant.location.state)

  end
end
