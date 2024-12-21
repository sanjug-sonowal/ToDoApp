import { NextResponse } from 'next/server'
import { createTask } from '../../../lib/tasks'

export async function POST(request: Request)
{
    const body = await request.json()
    const task = await createTask(body)
    return NextResponse.json(task)
}

