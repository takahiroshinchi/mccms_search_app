# トップページを担当するコントローラ
# URL からのリクエストを受け取り、対応するビューを描画する
class HomeController < ApplicationController
  def index
    # インスタンス変数 (@...) はビューから参照できる
    @message = "Hello, Rails!"
  end
end
