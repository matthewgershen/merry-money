class Api::WatchlistMembershipsController < ApplicationController

  def create
    @watchlistmembership = WatchlistMembership.new(user_id: current_user.id, company_id: params[:id])
    if @watchlistmembership.save
      @company = Company.find(@watchlistmembership.company_id)
      render 'api/compny/show'
    else
      render json: @watchlistmembership.errors.full_messages, status: 422
    end
  end

  def destroy
    @watchlistmembership = WatchlistMembership.find_by(user_id: current_user.id, company_id: params[:id])
    @company = Company.find(@watchlistmembership.company_id)
    @watchlistmembership.destroy
    render 'api/compny/show'
  end


end
