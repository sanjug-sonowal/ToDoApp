import TaskCard from './TaskCard'
import { Task } from './types'

type TaskListProps = {
    tasks: Task[]
}

export default function TaskList({ tasks }: TaskListProps)
{
    return (
        <div className="space-y-4 h-[calc(100vh-12rem)] overflow-y-auto pr-4">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    )
}

