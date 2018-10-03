class Transaction < ApplicationRecord

  validates :user_id, :transaction_type, presence: true
  validates :transaction_type, inclusion: { in: %w(buy sell deposit withdraw)}
  validate :zero_shares
  validate :sufficient_funds
  validate :sufficient_shares


  belongs_to :user

  private

  def sufficient_funds
    if self.transaction_type == "buy" && (User.find(self.user_id).cash < self.price * self.shares)
      errors.add(:buying_power, "insufficient to complete transaction")
    end
  end

  def sufficient_shares
    if self.transaction_type == "sell" && (User.find(self.user_id).portfolio_holdings[self.company_id] < self.shares)
      errors.add(:shares, "exceeds amount currently owned")
    end
  end

  def zero_shares
    
    if (self.transaction_type == "buy" || self.transaction_type == "sell") && ( self.shares == nil || self.shares < 1)
      errors.add(:shares, "must be greater than 0")
    end
  end






end
