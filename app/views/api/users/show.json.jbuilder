json.extract!(@user, :username, :image_url)
json.reviews do
  json.array!(@user.reviews) do |review|
    json.extract!(review, :body, :rating)
    json.restaurantName(review.restaurant.title)
  end
end
