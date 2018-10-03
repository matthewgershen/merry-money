json.portfolio_holdings do
  current_user.portfolio_holdings.each do |asset|
    json.set! asset[0] do
      json.id asset[0]
      json.name Company.find(asset[0]).name
      json.symbol Company.find(asset[0]).symbol
      json.shares asset[1]
      json.price Company.find(asset[0]).get_price
    end
  end
end
