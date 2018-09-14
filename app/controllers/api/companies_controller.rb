class CompaniesController < ApplicationController

  def show
    @company = Company.find(params[:id])
    render :show
  end


end
