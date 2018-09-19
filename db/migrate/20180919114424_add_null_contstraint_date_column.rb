class AddNullContstraintDateColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :portfolio_snapshots, :date, :date, null: false
  end
end
