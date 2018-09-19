# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  street_address  :string
#  city            :string
#  state           :string
#  zip             :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  validates :email, :password_digest, :session_token, :first_name, :last_name, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  after_create :create_initial_snapshot

  attr_reader :password

  has_many :watchlist_memberships
  has_many :transactions
  has_many :portfolio_snapshots

  def holdings_value
    value = 0
    self.portfolio_holdings.each do |asset|
      id = asset[0]
      symbol = Company.find(id).symbol
      price = PortfolioSnapshot.get_price(symbol)
      shares = asset[1]
      value += (shares * price)
    end
    return value
  end

  def portfolio_holdings
    holdings = Hash.new(0)
    Transaction.where(user_id: self.id).each do |transaction|
      if transaction.transaction_type == "buy"
        holdings[transaction.company_id] += transaction.shares
      elsif transaction.transaction_type == "sell"
        holdings[transaction.company_id] -= transaction.shares
      end
    end
    return holdings
  end

  def cash
    cash = 0
    Transaction.where(user_id: self.id).each do |transaction|
      if transaction.transaction_type == "deposit"
        cash += transaction.price
      elsif transaction.transaction_type == "withdraw"
        cash -= transaction.price
      end
    end
    return cash.round
  end


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def create_initial_snapshot
    PortfolioSnapshot.create(user_id: self.id, cash:0,assets:0,total_value:0,date:Date.today())
  end
end
