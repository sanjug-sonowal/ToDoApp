import { v4 as uuidv4 } from 'uuid'

let tasks: Task[] = []

type Task = {
    id: string
    name: string
    description: string
    priority: 'low' | 'medium' | 'high'
    status: 'pending' | 'in-progress' | 'completed'
}

export async function createTask(task: Omit<Task, 'id'>): Promise<Task>
{
    const newTask = { ...task, id: uuidv4() }
    tasks.push(newTask)
    return newTask
}

export async function getTasks(): Promise<Task[]>
{
    return tasks
}

