'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

type Task = {
    id: string
    name: string
    description: string
    priority: 'low' | 'medium' | 'high'
    status: 'pending' | 'in-progress' | 'completed'
}

type TodoFormProps = {
    onAddTask: (task: Task) => void
    onUpdateTask: (task: Task) => void
    editingTask: Task | null
}

export default function TodoForm({ onAddTask, onUpdateTask, editingTask }: TodoFormProps)
{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')
    const [status, setStatus] = useState<'pending' | 'in-progress' | 'completed'>('pending')

    useEffect(() =>
    {
        if (editingTask)
        {
            setName(editingTask.name)
            setDescription(editingTask.description)
            setPriority(editingTask.priority)
            setStatus(editingTask.status)
        }
    }, [editingTask])

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault()
        if (editingTask)
        {
            onUpdateTask({
                id: editingTask.id,
                name,
                description,
                priority,
                status
            })
        } else
        {
            onAddTask({
                id: Date.now().toString(),
                name,
                description,
                priority,
                status
            })
        }
        setName('')
        setDescription('')
        setPriority('medium')
        setStatus('pending')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Task Name</Label>
                <Input
                    id="name"
                    placeholder="Enter task name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300">Task Description</Label>
                <Textarea
                    id="description"
                    placeholder="Enter task description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="priority" className="text-sm font-medium text-gray-700 dark:text-gray-300">Priority</Label>
                <Select value={priority} onValueChange={(value: 'low' | 'medium' | 'high') => setPriority(value)}>
                    <SelectTrigger id="priority" className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500">
                        <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="status" className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</Label>
                <Select value={status} onValueChange={(value: 'pending' | 'in-progress' | 'completed') => setStatus(value)}>
                    <SelectTrigger id="status" className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-blue-500">
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
                {editingTask ? 'Update Task' : 'Add Task'}
            </Button>
        </form>
    )
}

