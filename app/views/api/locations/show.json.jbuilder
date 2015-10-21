json.extract!(@location, :city, :state, :id, :lat, :lng, :restaurants)
json.title("#{@location.city}, #{@location.state}")
