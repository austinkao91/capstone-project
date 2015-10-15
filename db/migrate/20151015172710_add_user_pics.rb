class AddUserPics < ActiveRecord::Migration
  def change
    add_column :users, :image_url, :string, default: "http://res.cloudinary.com/dnifqmdlf/image/upload/v1444929813/images_ohgzbq.png"
  end
end
