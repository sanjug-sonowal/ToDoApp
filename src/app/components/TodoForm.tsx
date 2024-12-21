'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

type Task = {
    id: string
    name: string
    description: string
    priority: 'low' | 'medium' | 'high'
    status: 'pending' | 'in-progress' | 'completed'
}

type TodoFormProps = {
    onAddTask: (task: Task) => void
}

export default function TodoForm({ onAddTask }: TodoFormProps)
{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('medium')
    const [status, setStatus] = useState('pending')

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault()
        const newTask: Task = {
            id: Date.now().toString(),
            name,
            description,
            priority: priority as 'low' | 'medium' | 'high',
            status: status as 'pending' | 'in-progress' | 'completed'
        }
        onAddTask(newTask)
        setName('')
        setDescription('')
        setPriority('medium')
        setStatus('pending')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                placeholder="Task name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <Textarea
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                </SelectContent>
            </Select>
            <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
            </Select>
            <Button type="submit" className="w-full">Add Task</Button>
        </form>
    )
}

