class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :title, null: false
      t.string :street_address, null: false
      t.integer :zip_code, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :phone_number, null: false
      t.timestamps null: false
    end
  end
end
