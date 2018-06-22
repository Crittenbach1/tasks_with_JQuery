class GroupTaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :due_date
  has_many :tasks, serializer: TaskSerializer
end
