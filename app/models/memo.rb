# メモ1件を表すモデル（テーブル: memos）
# Active Record 経由で DB の読み書きを行う
class Memo < ApplicationRecord
  validates :title, presence: true
end
