# Rails 基本構成・規約を学ぶリポジトリ

`rails new --minimal` から始め、**規約とファイル配置の対応**をコミット単位で追えます。

## 起動方法

```bash
bundle install
bin/rails db:prepare
bin/rails db:seed
bin/rails server
```

- トップ: http://localhost:3000/
- Memo（手書き最小 CRUD）: http://localhost:3000/memos
- Post（scaffold フル REST）: http://localhost:3000/posts

## ハンズオン（おすすめ）

初めて触る場合は、次を上から順に進めてください。

→ **[docs/20260912_1326_Rails基本構成ハンズオン.md](docs/20260912_1326_Rails基本構成ハンズオン.md)**

## 学習の進め方（コミット / docs）

### 基礎（MVC の最小）

| 段階 | 内容 |
|------|------|
| 1 | 最小スケルトン |
| 2 | Route → Controller → View |
| 3 | Model + Migration（Memo） |
| 4 | 手書きの最小 CRUD（Memo） |
| 5 | README 総まとめ |

### 規約とスキャフォールド（Post）

| コミット | docs | 理解すること |
|----------|------|--------------|
| 規約① | `docs/01_naming_conventions.md` | 命名 ↔ ファイル / テーブル |
| scaffold① | `docs/02_scaffold_model.md` | Model + Migration |
| scaffold② | `docs/03_restful_routes.md` | `resources` の7ルート |
| scaffold③ | `docs/04_scaffold_controller.md` | 7アクションの Controller |
| scaffold④ | `docs/05_scaffold_views.md` | index / show / `_post` |
| scaffold⑤ | `docs/06_scaffold_form_partial.md` | new / edit / `_form` |

## 規約の核心（1語から全部決まる）

`Post` と決めると:

| 種類 | 名前 | パス |
|------|------|------|
| Model | `Post` | `app/models/post.rb` |
| Table | `posts` | `db/migrate/*_create_posts.rb` |
| Controller | `PostsController` | `app/controllers/posts_controller.rb` |
| Views | `posts/*` | `app/views/posts/` |
| Routes | `resources :posts` | `config/routes.rb` |

`PostsController#show` → 自動で `app/views/posts/show.html.erb` を探します。

## Memo と Post の対比

| | Memo | Post |
|--|------|------|
| 作り方 | 手書き | `rails g scaffold` |
| ルート | `only: %i[index create destroy]` | 7アクション全部 |
| 向いている学び | 部品のつながり | 規約どおりの全体像 |

## 補足

- `--minimal` のため Mailer / Cable / Job / Hotwire は未使用
- DB は SQLite（`db:prepare` で再作成）
- Vercel は静的 `public/` のみ（Rails 本体はローカルで起動）
