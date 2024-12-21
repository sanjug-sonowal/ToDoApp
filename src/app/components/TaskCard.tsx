import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Task = {
    id: string
    name: string
    description: string
    priority: 'low' | 'medium' | 'high'
    status: 'pending' | 'in-progress' | 'completed'
}

export default function TaskCard({ task }: { task: Task })
{
    const priorityColor = {
        low: 'bg-green-500',
        medium: 'bg-orange-500',
        high: 'bg-red-500',
    }

    const statusColor = {
        pending: 'bg-red-500',
        'in-progress': 'bg-orange-500',
        completed: 'bg-green-500',
    }

    const capitalize = (str: string) =>
    {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    return (
        <Card className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
            <CardHeader className="p-4">
                <CardTitle className="flex justify-between items-center text-gray-800 dark:text-gray-100 text-lg">
                    {capitalize(task.name)}
                    <div className="space-x-2">
                        <Badge className={`${priorityColor[task.priority]} text-white`}>{task.priority}</Badge>
                        <Badge className={`${statusColor[task.status]} text-white`}>{task.status}</Badge>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <p className="text-gray-600 dark:text-gray-300">{task.description}</p>
            </CardContent>
        </Card>
    )
}

