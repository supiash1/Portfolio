class ProjectsController < ApplicationController
	def index
		@projects = Project.all
	end

  def create
    @project = Project.new project_params
    @project.save
    # render :status => 201
  end

  def project_params
    params.require(:project).permit(:name, :description, :demo_url, :source_url, skills_attributes: [:id, :name, :_destroy ], images_attributes: [:id, :image, :_destroy ])
  end
end
