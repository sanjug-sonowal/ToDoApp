import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Task } from "./types"


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
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    {capitalize(task.name)}
                    <div className="space-x-2">
                        <Badge className={priorityColor[task.priority]}>{task.priority}</Badge>
                        <Badge className={statusColor[task.status]}>{task.status}</Badge>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="capitalize">{task.description}</p>
            </CardContent>
        </Card>
    )
}

