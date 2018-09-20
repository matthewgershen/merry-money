current_user.watchlist_memberships.each do |item|
  json.set! item.id do
    json.extract! item, :id,  :company_id
    json.price item.company.get_price
  end
end
