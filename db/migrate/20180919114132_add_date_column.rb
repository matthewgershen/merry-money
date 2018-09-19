class AddDateColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolio_snapshots, :date, :date
  end
end
