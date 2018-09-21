class Company < ApplicationRecord

  validates :symbol, :name, presence: true, uniqueness: true

  has_many :watchlist_memberships

  def get_price
    response = HTTParty.get("https://api.iextrading.com/1.0/stock/#{self.symbol}/price")
    response.parsed_response

  end

  def get_chart
    day = Date.yesterday.strftime("%Y%m%d")
    response = HTTParty.get("https://api.iextrading.com/1.0/stock/#{self.symbol}/chart/1d")
    response.parsed_response
  end

  def self.filter_companies(query)
    Company.where('name ILIKE ?',"%#{query}%")
  end
end
