json.array!(@restaurant) do |restaurant|
  json.extract!(restaurant, :title, :street_address, :zip_code, :state, :phone_number)
end
