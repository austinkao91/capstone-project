class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :title, null: false
      t.timestamps null: false
    end
    

    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :restaurant_id, null: false
      t.timestamps null: false
    end

    add_index :taggings, :tag_id
    add_index :taggings, :restaurant_id
  end
end
