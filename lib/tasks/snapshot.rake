task snapshot: :environment do

  User.all.each do |user|
    PortfolioSnapshot.create(user_id: user.id, cash: user.cash, assets:user.holdings_value,total_value:user.total_portfolio_value, date:Date.today())
  end

end
