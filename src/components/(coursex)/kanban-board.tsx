"use client"

import { useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface Task {
  id: string
  content: string
}

interface Column {
  id: string
  title: string
  tasks: Task[]
}

const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: 'task-1', content: 'Set up project structure' },
      { id: 'task-2', content: 'Create main components' },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      { id: 'task-3', content: 'Implement Kanban board' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      { id: 'task-4', content: 'Project planning' },
    ],
  },
]

export function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns)
  const [newTask, setNewTask] = useState('')

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return

    const sourceColumn = columns.find(col => col.id === source.droppableId)
    const destColumn = columns.find(col => col.id === destination.droppableId)
    
    if (sourceColumn && destColumn) {
      const sourceTasks = Array.from(sourceColumn.tasks)
      const destTasks = source.droppableId === destination.droppableId ? sourceTasks : Array.from(destColumn.tasks)
      const [removed] = sourceTasks.splice(source.index, 1)
      destTasks.splice(destination.index, 0, removed)

      const newColumns = columns.map(col => {
        if (col.id === source.droppableId) {
          return { ...col, tasks: sourceTasks }
        }
        if (col.id === destination.droppableId) {
          return { ...col, tasks: destTasks }
        }
        return col
      })

      setColumns(newColumns)
    }
  }

  const addNewTask = () => {
    if (newTask.trim() === '') return
    const todoColumn = columns.find(col => col.id === 'todo')
    if (todoColumn) {
      const newColumns = columns.map(col => {
        if (col.id === 'todo') {
          return {
            ...col,
            tasks: [...col.tasks, { id: `task-${Date.now()}`, content: newTask }],
          }
        }
        return col
      })
      setColumns(newColumns)
      setNewTask('')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex mb-4">
          <Input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="mr-2"
          />
          <Button onClick={addNewTask}><Plus className="mr-2 h-4 w-4" /> Add Task</Button>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {columns.map(column => (
              <div key={column.id} className="bg-secondary p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{column.title}</h3>
                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                      {column.tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-background p-2 rounded shadow"
                            >
                              {task.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      </CardContent>
    </Card>
  )
}

