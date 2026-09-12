# スキャフォールド単位②: RESTful ルート（resources）

```ruby
# config/routes.rb
resources :posts
```

この1行がスキャフォールドの「URL 規約」です。`bin/rails routes -g posts` で確認できます。

## 7アクション対応表

| HTTP | URL | コントローラ#アクション | 名前付きルート | 用途 |
|------|-----|-------------------------|----------------|------|
| GET | `/posts` | `posts#index` | `posts_path` | 一覧 |
| GET | `/posts/new` | `posts#new` | `new_post_path` | 新規フォーム |
| POST | `/posts` | `posts#create` | `posts_path` | 作成 |
| GET | `/posts/:id` | `posts#show` | `post_path(id)` | 詳細 |
| GET | `/posts/:id/edit` | `posts#edit` | `edit_post_path(id)` | 編集フォーム |
| PATCH/PUT | `/posts/:id` | `posts#update` | `post_path(id)` | 更新 |
| DELETE | `/posts/:id` | `posts#destroy` | `post_path(id)` | 削除 |

## 規約のポイント

- URL の複数形 `posts` ↔ コントローラ名 `PostsController`
- メンバー URL の `:id` ↔ `Post.find(params[:id])`
- ヘルパーは **単数/複数** が自動で切り替わる（`post_path` / `posts_path`）

## 手書き Memo との違い

```ruby
resources :memos, only: %i[index create destroy]  # 使うアクションだけに絞る
resources :posts                                   # scaffold は7つ全部
```

次の単位: **`PostsController`（7アクションの実装）**
