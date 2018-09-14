class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :symbol, null: false
      t.string :name, null: false
      t.timestamps
    end

    add_index :companies, :symbol, unique: true
    add_index :companies, :name, unique: true
  end
end
