# 開発用の初期データ
Memo.find_or_create_by!(title: "最初のメモ") do |memo|
  memo.body = "db/seeds.rb から投入されたサンプルです。"
end
