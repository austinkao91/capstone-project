Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:new,:create]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, constraints: {format:'json'} do
    resources :restaurants, only: [ :index, :create, :update, :show]
    resources :reviews, only: [:index, :create, :show, :update, :destroy]
    resources :tags, only: [:index, :create, :show]
  end
end
