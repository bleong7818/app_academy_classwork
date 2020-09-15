Rails.application.routes.draw do
  resources :posts, except: :index
  resources :subs
  resources :users, only: [:show, :create, :new]
  resource :session
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
