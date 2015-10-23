json.extract!(@user, :username, :image_url)
json.reviews do
  json.array!(@user.reviews) do |review|
    json.extract!(review, :body, :rating, :restaurant_id)
    json.created_at(review.created_at.to_date)
    json.restaurantName(review.restaurant.title)
    if(review.restaurant.pictures.length > 0)
      json.restaurant_image(review.restaurant.pictures[0])
    else
      json.restaurant_image("http://res.cloudinary.com/omnombloop/image/upload/v1445448726/pmdrnnchxoev0ln3sdh9.png")
    end
  end
end
