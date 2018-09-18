json.extract! @transaction, :user_id, :transaction_type, :company_id, :shares, :price
json.buyingPower @user.cash
json.portfolioHoldings @user.portfolio_holdings
