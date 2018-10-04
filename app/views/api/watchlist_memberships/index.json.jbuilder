
  json.watchlist do
    current_user.watchlist_memberships.each do |item|
      json.set! item.id do
        json.extract! item, :id,  :company_id
        json.price item.company.get_price
        json.chart item.company.get_chart
      end
    end
  end

  json.companies do
    current_user.watched_companies.each do |item|
      json.set! item.id do
        json.extract! item, :id,  :symbol, :name
      end
    end
  end
