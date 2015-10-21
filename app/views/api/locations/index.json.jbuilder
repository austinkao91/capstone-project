json.array!(@location) do |location|
  json.extract!(location, :city, :state, :restaurants, :id, :lat, :lng)
end
