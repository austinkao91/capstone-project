class SecureLink < ActiveRecord::Migration
  def change
    change_column_default :users, :image_url, "https://res.cloudinary.com/omnombloop/image/upload/v1445819452/anonymousUser_rb4i4l.png"

  end
end
