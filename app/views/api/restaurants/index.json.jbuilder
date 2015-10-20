json.array!(@restaurant) do |restaurant|
  json.extract!(restaurant, :id, :title, :street_address, :city, :zip_code, :state, :reviews, :lat, :lng)
  json.tags do
    json.array!(restaurant.tags) do |tag|
      json.extract!(tag, :title)
    end
  end
end
