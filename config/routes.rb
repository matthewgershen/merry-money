Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api,defaults: {format: :json} do
    resources :users
    resource :session
    resources :companies do
      collection do
        get 'search'
      end
    end
    resources :watchlist_memberships
    resources :transactions
    resources :portfolio_snapshots
    resources :portfolios
  end

end
