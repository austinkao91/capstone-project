if(@restaurant.length > 0)
  json.extract!(@restaurant[0], :id, :title, :tags, :reviews, :pictures, :street_address, :lat, :lng)
  json.priceRange(@restaurant[0].priceRange.id)
  json.city(@restaurant[0].location.city)
  json.state(@restaurant[0].location.state)
  json.reviews do
    json.array!(@restaurant[0].reviews) do |review|
      json.extract!(review, :body, :rating, :id, :restaurant_id, :user_id)
      json.created_at(review.created_at.to_date)
      json.user do
        json.reviews(review.user.reviews)
        json.username(review.user.username)
        json.image_url(review.user.image_url)
        json.id(review.user_id)
      end
    end
  end
end
