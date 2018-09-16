class CreateWatchlistMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlist_memberships do |t|
      t.integer :user_id, null: false
      t.integer :company_id, null: false
      t.timestamps
    end
    add_index :watchlist_memberships, :user_id
    add_index :watchlist_memberships, :company_id
  end
end
