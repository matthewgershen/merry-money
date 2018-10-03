current_user.portfolio_holdings.each do |asset|
  json.set! asset[0] do
    comp = Company.find(asset[0])
    json.id asset[0]
    json.name comp.name
    json.symbol comp.symbol
    json.shares asset[1]
    json.price comp.get_price
    json.chart comp.get_chart
  end
end
