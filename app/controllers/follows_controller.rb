class FollowsController < ApplicationController

	def create
		@user = User.find(params[:followed_id])
		current_user.follow(@user)
		redirect_to users_path(current_user)
		flash[:notice] = "Successfully followed user #{@user.email}"
	end

	def destroy
		@user= Follow.find(params[:id]).followed
		current_user.unfollow(@user)
		redirect_to users_path(current_user)
		flash[:notice] = "Successfully unfollowed user #{@user.email}"
	end

end
