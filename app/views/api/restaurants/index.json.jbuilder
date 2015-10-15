json.array!(@restaurant) do |restaurant|
  json.extract!(restaurant, :id, :title, :street_address, :city, :zip_code, :state, :reviews)
end
