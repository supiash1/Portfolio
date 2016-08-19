class Project < ApplicationRecord
	has_many :skills
	accepts_nested_attributes_for :skills, :allow_destroy => true
	has_many :images
	accepts_nested_attributes_for :images, :allow_destroy => true
end
