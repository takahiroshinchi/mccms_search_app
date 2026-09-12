# 規約: create_table :posts の :posts がテーブル名
# ファイル名の末尾 create_posts も同じ語幹
class CreatePosts < ActiveRecord::Migration[7.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body

      t.timestamps # created_at / updated_at が自動で付く規約
    end
  end
end
