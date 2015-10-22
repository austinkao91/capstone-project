json.extract!(@review, :body, :rating, :restaurant)
json.username(@review.user.username)
json.user_id(@review.user.id)
