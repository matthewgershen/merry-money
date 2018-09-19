class Api::PortfolioSnapshotsController < ApplicationController

  def index
    @portfolio_snapshots = PortfolioSnapshot.all.where(user_id: current_user.id)
    render :index
  end

end
