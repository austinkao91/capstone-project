json.extract!(@review, :id, :body, :rating, :restaurant)
json.created_at(@review.created_at.to_date)
json.username(@review.user.username)
json.user_id(@review.user.id)
