class Api::CompaniesController < ApplicationController

  def show
    @company = Company.find(params[:id])
    render :show
  end

  def index
    @companies = Company.all
    render :index
  end

end
