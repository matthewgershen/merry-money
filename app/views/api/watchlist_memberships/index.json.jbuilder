current_user.watchlist_memberships.each do |item|
  json.set! item.id do
    json.extract! item, :id,  :company_id
  end
end
