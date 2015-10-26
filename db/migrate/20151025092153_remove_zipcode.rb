class RemoveZipcode < ActiveRecord::Migration
  def change
    remove_column :restaurants, :zip_code
  end
end
