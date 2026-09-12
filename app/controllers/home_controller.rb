# トップページ: 学習用リンクと件数のダッシュボード
class HomeController < ApplicationController
  def index
    @message = "Hello, Rails!"
    @memo_count = Memo.count
    @post_count = Post.count
  end
end
