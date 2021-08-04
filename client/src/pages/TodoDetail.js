import React from 'react'
import { useLocation } from 'react-router-dom'

export default function TodoDetail() {
  const { state: { id, text } } = useLocation();
  return (
    <div>
      <h1>{id}</h1>
      <h3>{text}</h3>
    </div>
  )
}
