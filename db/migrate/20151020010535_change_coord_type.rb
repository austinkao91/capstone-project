class ChangeCoordType < ActiveRecord::Migration
  def change
    change_column :restaurants, :lat, :float
    change_column :restaurants, :lng, :float
    add_column :locations, :lat, :float
    add_column :locations, :lng, :float
  end
end
