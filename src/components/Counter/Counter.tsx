'use client'
import { useState } from 'react'
import styles from './Counter.module.scss'

export default function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <button
      className={`${styles.button} bg-blue-600 text-white px-4 py-2 rounded-md`}
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </button>
  )
}
