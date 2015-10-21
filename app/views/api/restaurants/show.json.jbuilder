if(@restaurant.length > 0)
  json.extract!(@restaurant[0], :id, :title, :pictures, :street_address, :zip_code, :phone_number, :lat, :lng)
  json.city(@restaurant[0].location.city)
  json.state(@restaurant[0].location.state)
  json.reviews do
    json.array!(@restaurant[0].reviews) do |review|
      json.extract!(review, :body, :rating, :restaurant_id, :user_id)
      json.image_url(review.user.image_url)
      json.created_at(review.created_at.to_date)
      json.username(review.user.username)
    end
  end
  json.tags do
    json.array!(@restaurant[0].tags) do |tag|
      json.extract!(tag, :title)
    end
  end
end
