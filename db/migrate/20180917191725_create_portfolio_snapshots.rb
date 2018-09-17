class CreatePortfolioSnapshots < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolio_snapshots do |t|
      t.integer :user_id, null: false
      t.decimal :cash, null: false
      t.decimal :assets, null: false
      t.decimal :total_value, null: false
      t.timestamps
    end
    add_index :portfolio_snapshots, :user_id
  end
end
