import React, { useState, useEffect } from 'react'

import { Todo } from '../../components/Todo'

export function Dashboard() {
  const [ reminders, setReminders ] = useState([])

  function updateTodo(todo){
    fetch(`/api/reminders/${todo.id}`, {method: 'PUT', body: JSON.stringify(todo)})
    fetch("/api/reminders")
  }

  function onCheck(todo){
    updateTodo(todo)
  }

  function onUncheck(todo){
    updateTodo(todo)
  }

  useEffect(() => {
    fetch("/api/reminders")
      .then((response) => response.json())
      .then((json) => setReminders(json.reminders))
  }, [])

  useEffect(() => {
    console.log(reminders)
  }, [reminders])

  return (
    <div>
      <h2>Dashboard</h2>
      {reminders.map(r => (
        <Todo
          todo={r}
          key={r.id}
          onCheck={onCheck}
          onUncheck={onUncheck}
        />
      ))}
    </div>
  );
}
