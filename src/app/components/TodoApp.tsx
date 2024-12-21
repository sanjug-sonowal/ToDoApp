'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Sun, Moon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import TodoForm from './TodoForm';
import TaskList from './TaskList';
import { Task } from './types';

export default function TodoApp()
{
    const [tasks, setTasks] = useState<Task[]>([]);
    const [darkMode, setDarkMode] = useState(false);

    const addTask = (task: Task) =>
    {
        setTasks([...tasks, task]);
    };

    useEffect(() =>
    {
        if (darkMode)
        {
            document.documentElement.classList.add('dark');
        } else
        {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <Card className="w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-lg">
            <CardContent className="p-6">
                {/* Header Section */}
                <div className="flex flex-col space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src="/placeholder.svg" alt="User profile" />
                                <AvatarFallback>UN</AvatarFallback>
                            </Avatar>
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Todo App</h2>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Sun className="h-5 w-5 text-yellow-500" />
                            <Switch
                                checked={darkMode}
                                onCheckedChange={setDarkMode}
                                className="data-[state=checked]:bg-blue-600"
                            />
                            <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        </div>
                    </div>

                    {/* Separator Below Header */}
                    <Separator className="my-4" />
                </div>

                {/* Main Content Section */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* TodoForm Section */}
                    <Card className="w-full md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                Add New Task
                            </h3>
                            <TodoForm onAddTask={addTask} />
                        </CardContent>
                    </Card>

                    {/* TaskList Section */}
                    <Card className="w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                Task List
                            </h3>
                            <TaskList tasks={tasks} />
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    );
}
