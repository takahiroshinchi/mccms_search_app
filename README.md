# Rails 基本構成（最小）を学ぶリポジトリ

`rails new --minimal` で作った最小構成です。
コミットを段階的に追うと、Rails の基本の流れが分かります。

## この段階（段階1）で分かること

| ディレクトリ / ファイル | 役割 |
|---|---|
| `app/` | アプリケーション本体（MVC） |
| `app/controllers/` | リクエストを受け取り、応答を決める |
| `app/models/` | データとビジネスルール |
| `app/views/` | HTML などの表示 |
| `config/` | ルーティング・環境設定・DB設定 |
| `config/routes.rb` | URL とコントローラの対応表 |
| `db/` | マイグレーション・シード |
| `bin/rails` | Rails コマンドの入口 |
| `Gemfile` | 依存 gem の定義 |
| `config.ru` | Rack（Webサーバ）への入口 |

## 起動方法

```bash
bundle install
bin/rails server
```

ブラウザまたは `curl http://localhost:3000/up` でヘルスチェックを確認できます。

## コミットの読み方

1. **段階1** … スケルトン（今ここ）
2. **段階2** … Route → Controller → View
3. **段階3** … Model + Migration
4. **段階4** … 最小 CRUD
5. **段階5** … 構成の総まとめ README
