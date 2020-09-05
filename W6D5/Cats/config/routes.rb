Rails.application.routes.draw do
  # get 'cats/index' 
  # get 'cats/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/cats', to: 'cats#index', as: 'cats'
  post '/cats', to: 'cats#create'
  get '/cats/:id', to: 'cats#show', as: 'cat'
  get '/cats/new', to: 'cats#new', as: 'users'
  # get '/users', to: 'users#index', as: 'users'
  # post '/users', to: 'users#create'
  # get '/users/new', to: 'users#new', as: 'new_user'
  # get '/users/:id/edit', to: 'users#edit', as: 'edit_user'
  # get '/users/:id', to: 'users#show', as: 'user'
  # patch '/users/:id', to: 'users#update'
  # put '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy'
end
