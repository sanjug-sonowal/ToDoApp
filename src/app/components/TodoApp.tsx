'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import TodoForm from './TodoForm'
import TaskList from './TaskList'

type Task = {
    id: string
    name: string
    description: string
    priority: 'low' | 'medium' | 'high'
    status: 'pending' | 'in-progress' | 'completed'
}

export default function TodoApp()
{
    const [tasks, setTasks] = useState<Task[]>([])

    const addTask = (task: Task) =>
    {
        setTasks([...tasks, task])
    }

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt="User profile" />
                        <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold">Todo App</h2>
                </div>
            </CardHeader>
            <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/3">
                        <TodoForm onAddTask={addTask} />
                    </div>
                    <div className="w-full md:w-2/3">
                        <TaskList tasks={tasks} />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

