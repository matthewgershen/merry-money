

class PortfolioSnapshot < ApplicationRecord

  validates :user_id, :cash, :assets, :total_value, presence: true


  belongs_to :user


  def self.portfolio_value(user)
    user.cash + user.holdings_value
  end

  private

  def self.get_price(symbol)
    day = Time.now.strftime("%Y%m%d")
    response = HTTParty.get("https://api.iextrading.com/1.0/stock/#{symbol}/chart/date/#{day}")
    response.last["close"]
  end



end
