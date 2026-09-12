# 規約: PostsController（複数形）↔ app/controllers/posts_controller.rb
#       resources :posts の各アクション名とメソッド名が一致する
class PostsController < ApplicationController
  before_action :set_post, only: %i[show edit update destroy]

  # GET /posts
  def index
    @posts = Post.order(created_at: :desc)
  end

  # GET /posts/:id
  def show
    # @post は set_post でセット済み
    # デフォルトで app/views/posts/show.html.erb を描画
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/:id/edit
  def edit
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to @post, notice: "記事を作成しました"
    else
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/:id
  def update
    if @post.update(post_params)
      redirect_to @post, notice: "記事を更新しました", status: :see_other
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /posts/:id
  def destroy
    @post.destroy!
    redirect_to posts_path, notice: "記事を削除しました", status: :see_other
  end

  private

  def set_post
    # ルートの :id が params[:id] になる規約
    @post = Post.find(params[:id])
  end

  def post_params
    # form_with model: @post のキーは :post（モデル名の単数）
    params.require(:post).permit(:title, :body)
  end
end
