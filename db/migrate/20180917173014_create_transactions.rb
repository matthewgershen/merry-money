class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.string :transaction_type, null: false
      t.integer :company_id
      t.integer :shares
      t.decimal :price
      t.timestamps
    end
    add_index :transactions, :user_id
  end
end
