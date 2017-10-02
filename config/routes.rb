Rails.application.routes.draw do
  root to: 'home#index'
  post 'events/create', to: 'event#create'
end
