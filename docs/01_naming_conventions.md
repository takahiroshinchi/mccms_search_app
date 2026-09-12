# Rails 規約①: 命名規則とファイル配置

Rails は「同じ意味なら同じ名前・置き場所」という **Convention over Configuration** で動きます。
名前を決めれば、ファイルパスもルートもほぼ自動で決まります。

## 1語から全部が決まる例: `Post`（記事）

| 種類 | 規約での名前 | 実際のパス / 識別子 |
|------|--------------|---------------------|
| モデル（単数・CamelCase） | `Post` | `app/models/post.rb` |
| DBテーブル（複数・snake） | `posts` | `db/migrate/*_create_posts.rb` |
| コントローラ（複数・Camel） | `PostsController` | `app/controllers/posts_controller.rb` |
| ビュー用フォルダ（複数） | `posts` | `app/views/posts/` |
| ルート（複数シンボル） | `:posts` | `resources :posts` |
| URL | `/posts`, `/posts/:id` | `bin/rails routes` で確認 |
| ヘルパー名 | `posts_path`, `post_path(@post)` | ビュー / コントローラから呼ぶ |

## コントローラのアクション → ビューファイル

規約: **`App::コントローラ名#アクション` → `app/views/コントローラ名/アクション.html.erb`**

| コントローラ | アクション | 描画されるビュー（デフォルト） |
|--------------|------------|--------------------------------|
| `PostsController` | `index` | `app/views/posts/index.html.erb` |
| `PostsController` | `show` | `app/views/posts/show.html.erb` |
| `PostsController` | `new` | `app/views/posts/new.html.erb` |
| `PostsController` | `edit` | `app/views/posts/edit.html.erb` |

`render` や `redirect_to` を書かなければ、この対応がそのまま使われます。

## パーシャル（部分テンプレート）の規約

| 呼び方 | 探すファイル |
|--------|--------------|
| `render "form"` | 同じフォルダの `_form.html.erb` |
| `render @post` | `app/views/posts/_post.html.erb` |
| `render "shared/flash"` | `app/views/shared/_flash.html.erb` |

ファイル名の先頭 `_` が「パーシャルである」という規約です。

## パラメータ名の規約

- フォームの `form_with model: @post` → params のキーは `:post`
- Strong Parameters: `params.require(:post).permit(:title, :body)`
- モデル名（単数）と params キーが一致する

## このリポジトリでの対比

| やり方 | リソース | 学べること |
|--------|----------|------------|
| 手書きの最小 CRUD | `Memo` | 必要な部品だけを自分でつなぐ |
| `rails g scaffold` | `Post` | 規約どおりのファイルが一式そろう |

次のコミット以降で、`Post` のスキャフォールドを規約単位に追います。
