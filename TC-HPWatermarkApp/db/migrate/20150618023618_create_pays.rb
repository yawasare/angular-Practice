class CreatePays < ActiveRecord::Migration
  def change
    create_table :pays do |t|
      t.string :name
      t.string :url
      t.string :payoffurl

      t.timestamps
    end
  end
end
