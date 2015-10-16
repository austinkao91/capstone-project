json.extract!(@restaurant, :id, :title, :city, :street_address, :zip_code, :state, :phone_number)
json.reviews do
  json.array!(@review) do |review|
    json.extract!(review, :body, :rating, :restaurant_id, :user_id)
    json.image_url(review.user.image_url)
    json.created_at(review.created_at.to_date)
    json.username(review.user.username)
    json.avg_ratings(review.average(:rating))
  end
end
