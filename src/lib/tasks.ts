import { Task } from '@/app/components/types'
import { v4 as uuidv4 } from 'uuid'

let tasks: Task[] = []



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

