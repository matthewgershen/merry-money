json.extract! @user, :id, :email, :first_name, :last_name, :street_address, :city, :state, :zip
json.buyingPower @user.cash
json.portfolioHoldings @user.portfolio_holdings
