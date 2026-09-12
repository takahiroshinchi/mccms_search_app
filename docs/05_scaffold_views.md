# スキャフォールド単位④: アクション用 View

| アクション | ビューファイル |
|------------|----------------|
| `index` | `app/views/posts/index.html.erb` |
| `show` | `app/views/posts/show.html.erb` |
| （表示部品） | `app/views/posts/_post.html.erb` |

## パス解決の規約

```
コントローラ名（複数・snake） / アクション名.html.erb
PostsController  →  posts/
#index           →  index.html.erb
#show            →  show.html.erb
```

## `render @post` の規約

```erb
<%= render @post %>
<%= render post %>
```

どちらも `app/views/posts/_post.html.erb` を探し、ローカル変数 `post` を渡します。
モデルクラス名（単数）からパーシャル名を決めるのが規約です。

次の単位: **`new` / `edit` と共有パーシャル `_form`**
