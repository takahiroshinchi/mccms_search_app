Memo.find_or_create_by!(title: "最初のメモ") do |m|
  m.body = "db/seeds.rb から投入されたサンプルです"
end

Post.find_or_create_by!(title: "スキャフォールドの記事") do |p|
  p.body = "rails g scaffold で揃った規約どおりの一式です"
end
