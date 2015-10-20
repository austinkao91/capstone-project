class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :city, null: false
      t.string :state, null: false
      t.timestamps null: false
    end


    create_table :location_taggings do |t|
      t.integer :restaurant_id, null: false
      t.integer :location_id, null: false
    end

    add_index :location_taggings, [:restaurant_id, :location_id], unique: true
    add_index :location_taggings, [:location_id]
  end
end
