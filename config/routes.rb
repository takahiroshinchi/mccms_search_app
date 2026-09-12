Rails.application.routes.draw do
  # ヘルスチェック（アプリが起動できているか確認する用）
  get "up" => "rails/health#show", as: :rails_health_check
end
