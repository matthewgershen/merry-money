class Api::TransactionsController < ApplicationController

  def create
    @transaction = Transaction.new(transaction_params)
    @user = User.find(@transaction.user_id)
    if @transaction.save
      render :show
    else
      render json: @transaction.errors.full_messages, status: 422
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:transaction_type,:shares,:price,:company_id, :user_id)
  end
end
