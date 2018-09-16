class WatchlistMembership < ApplicationRecord

  validates :user_id, :company_id, presence: true


  belongs_to :user
  belongs_to :company

end
