class ImageSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :project_id

  def image_url
  	object.image.url
  end
end
