class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :source_url, :demo_url
  has_many :skills
  has_many :images
end
