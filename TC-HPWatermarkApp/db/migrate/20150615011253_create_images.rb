class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :name
      t.string :original
      t.string :final
      t.integer :height
      t.integer :width
      t.belongs_to :project, index: true
      t.timestamps
    end
  end
end
