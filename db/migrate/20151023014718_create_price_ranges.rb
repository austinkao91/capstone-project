class CreatePriceRanges < ActiveRecord::Migration
  def change
    create_table :price_ranges do |t|
      t.integer :min, null: false
      t.integer :max, null: false
      t.timestamps null: false
    end

    create_table :price_range_joinings do |t|
      t.integer :priceRange_id, null: false
      t.integer :restaurant_id, null: false
    end

    add_index :price_range_joinings, [:restaurant_id, :priceRange_id]
    add_index :price_range_joinings, [:restaurant_id], unique: true

  end
end
