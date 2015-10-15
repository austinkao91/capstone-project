class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :reviews, [:user_id, :restaurant_id], unique: true
    add_index :reviews, :restaurant_id
    add_column :restaurants, :lat, :integer
    add_column :restaurants, :lng, :integer

  end
end
