class CreateTexts < ActiveRecord::Migration
  def up
  	create_table :texts do |t|
  		t.text :sit
  		t.text :pro
  		t.text :sol
  		t.text :imp
  		t.text :eva

  		t.timestamps
  	end
  end

  def down
  	drop_table :texts
  end
end
