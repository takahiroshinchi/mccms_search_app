# スキャフォールド単位⑤: `_form` パーシャル（new / edit 共有）

| ファイル | 役割 |
|----------|------|
| `app/views/posts/new.html.erb` | 新規画面（`#new`） |
| `app/views/posts/edit.html.erb` | 編集画面（`#edit`） |
| `app/views/posts/_form.html.erb` | 両方から呼ばれる共通フォーム |

## パーシャル呼び出しの規約

```erb
<%= render "form", post: @post %>
```

- `"form"` → 同じディレクトリの **`_form.html.erb`**
- 先頭の `_` は「パーシャル」を示す規約（URL からは直接配信されない）

## `form_with model:` の規約

```erb
<%= form_with model: post do |f| %>
```

| `@post` の状態 | 送信先 | HTTP |
|----------------|--------|------|
| 未保存 (`new`) | `/posts` | POST → `create` |
| 保存済み | `/posts/:id` | PATCH → `update` |

URL を自分で書かなくても、モデルの状態から決まるのが Rails の規約です。

## params キーとの対応

フォームの name は `post[title]` などになる → `params[:post]`  
→ `params.require(:post).permit(...)` と対になる。

これで Post スキャフォールド一式の単位は完了です。
