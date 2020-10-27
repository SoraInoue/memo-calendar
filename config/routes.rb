Rails.application.routes.draw do
  devise_for :users
  root 'calendars#index'
  resources :users, only: [:edit, :update]
  resources :calendars
    post "/" => 'calendars#index'
end
