Rails.application.routes.draw do
  # root "/" にアクセスしたら HomeController の index アクションへ
  root "home#index"

  # メモの最小 CRUD（index / create / destroy）
  resources :memos, only: %i[index create destroy]

  # ヘルスチェック（アプリが起動できているか確認する用）
  get "up" => "rails/health#show", as: :rails_health_check
end
