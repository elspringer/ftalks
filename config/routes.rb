Rails.application.routes.draw do

  root 'pages#home'
  get 'datenschutz', to: 'pages#datenschutz'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
