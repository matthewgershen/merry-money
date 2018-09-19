json.array!(@portfolio_snapshots) do |snap|
  json.extract! snap, :id, :user_id, :cash, :assets, :total_value, :date
end
