import TaskCard from './TaskCard'

type Task = {
    id: string
    name: string
    description: string
    priority: 'low' | 'medium' | 'high'
    status: 'pending' | 'in-progress' | 'completed'
}

type TaskListProps = {
    tasks: Task[]
    onEditTask: (id: string) => void
    onDeleteTask: (id: string) => void
}

export default function TaskList({ tasks, onEditTask, onDeleteTask }: TaskListProps)
{
    return (
        <div className="space-y-4 max-h-[calc(100vh-16rem)] overflow-y-auto pr-2">
            {tasks.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center">No tasks yet. Add a task to get started!</p>
            ) : (
                tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onEdit={onEditTask}
                        onDelete={onDeleteTask}
                    />
                ))
            )}
        </div>
    )
}

