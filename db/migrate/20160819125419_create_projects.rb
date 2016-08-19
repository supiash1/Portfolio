class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :source_url
      t.string :demo_url

      t.timestamps
    end
  end
end
