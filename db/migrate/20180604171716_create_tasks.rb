class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.boolean :status, :default => false
      t.integer :user_id
      t.integer :group_task_id
    end
  end
end
