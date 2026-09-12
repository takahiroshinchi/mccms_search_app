# メモの一覧・作成・削除を扱うコントローラ
class MemosController < ApplicationController
  def index
    @memos = Memo.order(created_at: :desc)
    @memo = Memo.new
  end

  def create
    @memo = Memo.new(memo_params)
    if @memo.save
      redirect_to memos_path, notice: "メモを作成しました"
    else
      @memos = Memo.order(created_at: :desc)
      flash.now[:alert] = "タイトルを入力してください"
      render :index, status: :unprocessable_entity
    end
  end

  def destroy
    memo = Memo.find(params[:id])
    memo.destroy!
    redirect_to memos_path, notice: "メモを削除しました"
  end

  private

  def memo_params
    params.require(:memo).permit(:title, :body)
  end
end
