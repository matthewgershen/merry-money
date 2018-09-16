class Company < ApplicationRecord

  validates :symbol, :name, presence: true, uniqueness: true

  has_many :watchlist_memberships

end
