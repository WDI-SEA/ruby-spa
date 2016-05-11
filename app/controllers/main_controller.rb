class MainController < ApplicationController
  def index
  	@posts = Post.includes(:user).all
	  # @user = User.authenticate user_params[:name], user_params[:password]
	  @user = User.new
  end

  private

	def user_params
	  params.require(:user).permit(:name, :password)
	end

end
