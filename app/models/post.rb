# 規約: クラス名 Post（単数・CamelCase）
#   → ファイル app/models/post.rb
#   → テーブル名 posts（複数・snake_case）
#
# rails g scaffold Post ... が最初に作るのがこの Model と Migration
class Post < ApplicationRecord
  validates :title, presence: true
end
