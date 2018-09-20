json.array!(@portfolio_snapshots.sort_by{|snap|snap.date}) do |snap|
  json.extract! snap, :id, :user_id, :cash, :assets, :total_value, :date
end
