class Company < ApplicationRecord

  validates :symbol, :name, presence: true, uniqueness: true
  
end
