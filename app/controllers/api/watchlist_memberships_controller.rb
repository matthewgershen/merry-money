class Api::WatchlistMembershipsController < ApplicationController

  def create
    @watchlist_membership = WatchlistMembership.new(user_id: current_user.id, company_id: params[:company_id])
    if @watchlist_membership.save
      @company = Company.find(@watchlist_membership.company_id)
      render json: @watchlist_membership
    else
      render json: @watchlist_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @watchlist_membership = WatchlistMembership.find(params[:id])
    @company = Company.find(@watchlist_membership.company_id)
    @watchlist_membership.destroy
    render json: @watchlist_membership
  end

  def index
      @watchlist = current_user.watchlist_memberships
      render :index
  end


end
