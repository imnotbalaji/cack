Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index,:create,:show]
    resources :direct_messages, only: [:index, :show, :create] do 
      resources :messages, only: [:create]
    end 
    resource :session, only: [:create, :show, :destroy]
    resources :messages, only: [:update]


  end 


  get '*path', to: "static_pages#frontend_index"

  

end
