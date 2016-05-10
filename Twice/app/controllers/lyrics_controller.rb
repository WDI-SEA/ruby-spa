class LyricsController < ApplicationController
  def index
    @lyrics = Lyric.all
    @lyric = Lyric.new
  end

  def create
    lyric = Lyric.create post_params do |p|
    redirect_to lyrics_path
  end

  def new
    @lyric = Lyric.new
  end

  def edit
    @lyric = Lyric.find params[:id]
  end

  def show
    @lyric = Lyric.find params[:id]
  end

  def update
    p = Lyric.find params[:id]
    p.update lyric_params
    redirect_to lyrics_path
  end

  def destroy
    Lyric.find(params[:id]).delete
    redirect_to lyrics_path
  end

  private

  def lyric_params
    params.require(:lyric).permit(:song, :lyricko, :lyricen)
  end
end
