Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users

  # http_method 'path', to: 'controller#action'
  # get 'users/new', to: 'users#new', as: 'new_user'
  get '/users', to: 'users#index', as: 'all_users'
  get '/users/:id', to: 'users#show', as: 'specfic_user'
  post '/users', to: 'users#create', as: 'new_user'
  patch '/users/:id', to: 'users#update', as: 'update_user'
  delete '/users/:id', to: 'users#destroy',  as: 'destroy_user'
end
