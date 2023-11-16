class CreateDirectMessageUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :direct_message_users do |t|
      t.references :dm, null: false, foreign_key: {to_table: :direct_messages}
      t.references :member, null: false, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
