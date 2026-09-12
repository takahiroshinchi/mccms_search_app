# Rails 基本構成（最小）を学ぶリポジトリ

`rails new --minimal` から始め、コミットを段階的に追うと Rails の基本が分かります。

## 起動方法

```bash
bundle install
bin/rails db:prepare   # DB作成 + マイグレーション
bin/rails db:seed      # サンプルメモ（任意）
bin/rails server
```

- トップ: http://localhost:3000/
- メモ CRUD: http://localhost:3000/memos
- ヘルスチェック: http://localhost:3000/up

## コミットで追う学習パス

| 段階 | コミット | 理解すること |
|------|----------|--------------|
| 1 | スケルトン生成 | `app/` `config/` `db/` など標準ディレクトリ |
| 2 | Hello World | **Route → Controller → View** |
| 3 | Model + Migration | Active Record と DB スキーマ |
| 4 | 最小 CRUD | 一覧・作成・削除の一連の流れ |
| 5 | この README | 全体の対応関係の総まとめ |

## リクエストの流れ（MVC）

```
ブラウザ
  │  GET /memos
  ▼
config/routes.rb          … URL とアクションの対応
  │  resources :memos
  ▼
MemosController#index     … データを用意し、ビューを選ぶ
  │  @memos = Memo.order(...)
  ▼
Memo (Model)              … DB の memos テーブルを操作
  │
  ▼
app/views/memos/index.html.erb  … HTML を組み立てて返す
```

## 主要ディレクトリ早見表

```
.
├── app/
│   ├── controllers/     # リクエスト処理（C）
│   ├── models/          # データとバリデーション（M）
│   ├── views/           # 表示テンプレート（V）
│   └── assets/          # CSS など
├── config/
│   ├── routes.rb        # ルーティング
│   ├── database.yml     # DB接続設定
│   └── environments/    # 環境別設定
├── db/
│   ├── migrate/         # スキーマ変更の履歴
│   ├── schema.rb        # 現在のスキーマのスナップショット
│   └── seeds.rb         # 初期データ
├── bin/rails            # rails コマンド入口
├── Gemfile              # 依存 gem
└── config.ru            # Webサーバ（Rack）入口
```

## このアプリで触るファイル

| やりたいこと | 見るファイル |
|--------------|--------------|
| URL を増やす | `config/routes.rb` |
| 画面のロジック | `app/controllers/*_controller.rb` |
| HTML | `app/views/**/*.html.erb` |
| DB の列を増やす | `db/migrate/` に新規マイグレーション |
| バリデーション | `app/models/memo.rb` |

## 補足

- `--minimal` のため Action Mailer / Cable / Job / Hotwire などは入っていません
- DB は SQLite（ファイルは gitignore。`db:prepare` で再作成）
- 本番用の秘密鍵管理は簡略化しています（学習用途）
