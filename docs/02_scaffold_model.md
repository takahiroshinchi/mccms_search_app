# スキャフォールド単位①: Model + Migration

```bash
bin/rails generate scaffold Post title:string body:text
```

このコマンドが **最初に** 作る（または相当する）のが次の2つです。

| 生成物 | パス | 規約 |
|--------|------|------|
| モデル | `app/models/post.rb` | クラス `Post` ↔ ファイル `post.rb` |
| マイグレーション | `db/migrate/*_create_posts.rb` | テーブル `posts`（複数形） |

## 覚え方

```
英語の「1件」の名前を決める → Post
  ├─ モデルクラス   Post
  ├─ ファイル       post.rb
  └─ テーブル       posts   ← 複数形にするのが Rails の規約
```

## このあとやること

```bash
bin/rails db:migrate   # マイグレーションを実行して posts テーブルを作る
```

`db/schema.rb` に `create_table "posts"` が現れれば成功です。

次の単位: **`resources :posts`（RESTful ルート）**
