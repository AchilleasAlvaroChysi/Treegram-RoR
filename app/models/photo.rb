class Photo<ActiveRecord::Base
  belongs_to :user
  has_many :tags
  has_many :commentings, class_name: "Comment", dependent: :destroy

  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  def addComment(this_comment)
	  commentings << this_comment
  end
end
