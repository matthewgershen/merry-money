class Transaction < ApplicationRecord

  validates :user_id, :transaction_type, presence: true
  validates :transaction_type, inclusion: { in: %w(buy sell deposit withdraw)}
  validate :sufficient_funds
  validate :sufficient_shares

  belongs_to :user

  private

  def sufficient_funds
    if self.transaction_type == "buy" && (User.find(self.user_id).cash < self.price * self.shares)
      errors.add(:funds, "Insufficient funds to complete transaction")
    end
  end

  def sufficient_shares
    debugger
    if self.transaction_type == "sell" && (User.find(self.user_id).portfolio_holdings[self.company_id] < self.shares)
      errors.add(:shares, "Insufficient shares to complete transaction")
    end
  end





end
