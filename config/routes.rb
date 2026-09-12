Rails.application.routes.draw do
  # --- スキャフォールド規約: resources :posts ---
  # これ1行で REST の7アクション分の URL が生える
  # （index/show/new/create/edit/update/destroy）
  # 対応表は docs/03_restful_routes.md を参照
  resources :posts

  # root "/" にアクセスしたら HomeController の index アクションへ
  root "home#index"

  # メモは手書きの最小 CRUD（index / create / destroy のみ）
  # → scaffold の resources :posts（フル）と対比して読むと分かりやすい
  resources :memos, only: %i[index create destroy]

  # ヘルスチェック（アプリが起動できているか確認する用）
  get "up" => "rails/health#show", as: :rails_health_check
end
