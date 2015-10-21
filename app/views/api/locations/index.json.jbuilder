json.array!(@location) do |location|
  json.extract!(location, :city, :state, :restaurants, :id, :lat, :lng)
  json.title("#{location.city}, #{location.state}")
end
