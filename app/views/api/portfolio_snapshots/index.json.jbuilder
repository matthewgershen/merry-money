@portfolio_snapshots.each do |snap|
  json.set! snap.id do
    json.extract! snap, :id, :user_id, :cash, :assets, :total_value, :date
  end
end
