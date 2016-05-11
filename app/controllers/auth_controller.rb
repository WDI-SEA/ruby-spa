class AuthController < ApplicationController

	def login
	  @user = User.authenticate user_params[:name], user_params[:password]

	  if @user
	    session[:user_id] = @user.id
	    flash[:success] = "User logged in!!"
	    render :json => {name: @user.name, email: @user.email}
	  else
	    flash[:danger] = "Credentials Invalid!!"
	    render :json => {err: "Credentials Invalid!!"}
	  end
	end

	def logout
	  session[:user_id] = nil
	  flash[:success] = "User logged out!!"
	  render status: 200, json: {
	    message: "User logged out!!"
	  }.to_json
	end

	private

	def user_params
	  params.require(:user).permit(:name, :password)
	end

end
