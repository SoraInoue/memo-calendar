class CreateCalendars < ActiveRecord::Migration[5.0]
  def change
    create_table :calendars do |t|
      t.string :title, null: false
      t.text :memo
      t.datetime :start_time, null: false
      t.integer :user_id, null: false,foreign_key: true

      t.timestamps
    end
  end
end