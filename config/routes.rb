Rails.application.routes.draw do

  resources :grades
  get '/' => 'static#index'
  #root to: 'static#index'
  # get '/' => 'static#index'

end
