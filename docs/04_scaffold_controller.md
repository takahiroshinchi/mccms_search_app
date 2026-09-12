# スキャフォールド単位③: Controller（7アクション）

| ファイル | クラス |
|----------|--------|
| `app/controllers/posts_controller.rb` | `PostsController` |

## アクションとビューの自動対応

コントローラで `render` を書かないとき、Rails は次を探します。

```
PostsController#index  →  app/views/posts/index.html.erb
PostsController#show   →  app/views/posts/show.html.erb
PostsController#new    →  app/views/posts/new.html.erb
PostsController#edit   →  app/views/posts/edit.html.erb
```

`create` / `update` / `destroy` は通常 `redirect_to` するので、専用ビューは不要です。

## メソッド名 = アクション名 = routes の action

`resources :posts` が要求する7名前と、コントローラの `def` 名は一致させます。
これが Rails の中心的な規約です。

## Strong Parameters

```ruby
params.require(:post).permit(:title, :body)
```

- `:post` … モデル名の単数（`form_with model: @post` と対）
- `permit` … 許可するカラムだけ通す

次の単位: **アクションごとの View ファイル**
