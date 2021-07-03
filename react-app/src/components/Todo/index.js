import React from 'react'

import { Container } from './styles'

export function Todo({ todo, onCheck, onUncheck }) {
  return (
    <Container>
      <input
      type="checkbox"
        defaultChecked={todo.done}
        onChange={e => {
          if(e.target.checked){
            onCheck({
              id: todo.id,
              text: todo.text,
              done: true
            })
          } else {
            onUncheck({
              id: todo.id,
              text: todo.text,
              done: false
            })
          }
        }}
      />
      {todo.text}
    </Container>
  )
}
