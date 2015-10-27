json.extract!(@user, :id, :username, :image_url)
json.reviews do
  json.array!(@user.reviews) do |review|
    json.extract!(review, :body, :rating, :restaurant_id)
    json.created_at(review.created_at.to_date)
    json.restaurantName(review.restaurant.title)
    json.restaurant_image(review.restaurant.pictures)
  end
end
