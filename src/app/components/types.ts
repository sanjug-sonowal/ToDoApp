export type Task = {
    id: string
    name: string
    description: string
    priority: 'low' | 'medium' | 'high'
    status: 'pending' | 'in-progress' | 'completed'
}
