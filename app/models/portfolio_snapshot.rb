

class PortfolioSnapshot < ApplicationRecord

  validates :user_id, :cash, :assets, :total_value, presence: true


  belongs_to :user



  






end
