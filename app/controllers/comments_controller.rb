class CommentsController < ApplicationController

	def show

		@photo= Photo.find(params[:photo_id])
		@user = User.find(params[:user_id])
			end

	def index
		@user = User.find(params[:user_id])
		@photo= Photo.find(params[:photo_id])

		render(:partial => 'coms', :object =>{:photo => @photo, :user =>@user} ) if request.xhr?
			end
 	
	def create
		@photo = Photo.find(params[:photo_id])
		@user = current_user
		
		@comment = Comment.create!(comment_params)
		@comment.user_id = @user.id
		@photo.addComment(@comment)
		flash[:notice] = "Success! Your comment was added  "
		redirect_to :back
			end
	
	def new
	end

	def destroy
		@comment = Comment.find(params[:id])
		@comment.destroy
		flash[:notice] = "Your comment has been deleted"
		redirect_to :back
	end
	private 
	  def comment_params
		  params.require(:comment).permit(:content)
	  end
end
