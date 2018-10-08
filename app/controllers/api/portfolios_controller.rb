class Api::PortfoliosController  < ApplicationController

  def portfolio
    render :index
  end

  def show
    @company_id = params[:id].to_i
    render :show
  end



end
