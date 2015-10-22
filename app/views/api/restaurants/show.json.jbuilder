if(@restaurant.length > 0)
  json.extract!(@restaurant[0], :id, :title, :tags, :reviews, :pictures, :street_address, :zip_code,  :lat, :lng)
  json.city(@restaurant[0].location.city)
  json.state(@restaurant[0].location.state)
  json.reviews do
    json.array!(@restaurant[0].reviews) do |review|
      json.extract!(review, :body, :rating, :restaurant_id)
      json.username(review.user.username)
      json.user_id(review.user.id)
    end
  end
end
