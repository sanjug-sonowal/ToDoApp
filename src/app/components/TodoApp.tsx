'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
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
    const [darkMode, setDarkMode] = useState(false)
    const [editingTask, setEditingTask] = useState<Task | null>(null)

    const addTask = (task: Task) =>
    {
        setTasks([...tasks, task])
    }

    const updateTask = (updatedTask: Task) =>
    {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task))
        setEditingTask(null)
    }

    const editTask = (id: string) =>
    {
        const taskToEdit = tasks.find(task => task.id === id)
        if (taskToEdit)
        {
            setEditingTask(taskToEdit)
        }
    }

    const deleteTask = (id: string) =>
    {
        setTasks(tasks.filter(task => task.id !== id))
    }

    useEffect(() =>
    {
        if (darkMode)
        {
            document.documentElement.classList.add('dark')
        } else
        {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <Card className="w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="/placeholder.svg" alt="User profile" />
                            <AvatarFallback>UN</AvatarFallback>
                        </Avatar>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Todo App</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4 text-yellow-500" />
                        <Switch
                            checked={darkMode}
                            onCheckedChange={setDarkMode}
                            className="data-[state=checked]:bg-blue-600"
                        />
                        <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </div>
                </div>

                <Separator className="my-6" />

                <div className="flex flex-col md:flex-row gap-6">
                    <Card className="w-full md:w-1/3 bg-white dark:bg-gray-800">
                        <CardContent className="p-4">
                            <TodoForm
                                onAddTask={addTask}
                                onUpdateTask={updateTask}
                                editingTask={editingTask}
                            />
                        </CardContent>
                    </Card>
                    <Card className="w-full md:w-2/3 bg-white dark:bg-gray-800">
                        <CardContent className="p-4">
                            <TaskList
                                tasks={tasks}
                                onEditTask={editTask}
                                onDeleteTask={deleteTask}
                            />
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    )
}

