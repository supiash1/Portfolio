class ImageSerializer < ActiveModel::Serializer
	require 'pry'
	binding.pry
  attributes :id, :image_url, :project_id

  def image_url
  	object.image.url
  end
end
