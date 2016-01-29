Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:new,:create]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: {format: :json} do
    resources :restaurants, only: [:index, :create, :update, :show]
    resources :reviews, only: [:index, :create, :show, :update, :destroy]
    resources :tags, only: [:index, :create, :show]
    resources :user, only: [:show, :update]
    resources :locations, only: [:index, :create, :show,:update]
  end
  get 'guest' => 'sessions#guest_log_in'
end
          
