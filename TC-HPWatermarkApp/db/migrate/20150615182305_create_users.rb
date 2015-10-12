class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :client_id
      t.string :client_secret
      t.string :password_digest
      t.timestamps
    end
  end
end
