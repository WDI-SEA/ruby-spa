class CreateLyrics < ActiveRecord::Migration
  def change
    create_table :lyrics do |t|
      t.string :song
      t.text :lyricsko
      t.text :lyricsen

      t.timestamps null: false
    end
  end
end
