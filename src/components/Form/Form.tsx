'use client'
import { useState } from 'react'

export default function Form() {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`You typed: ${text}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        className="border px-2 py-1 rounded"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">
        Submit
      </button>
    </form>
  )
}
