json.array!(@location) do |location|
  json.extract!(location, :city, :state, :restaurants)
end
