'use client'

import { login } from '@/services/auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [username, setU] = useState('')
  const [password, setP] = useState('')
  const [error, setError] = useState('')

  const submit = async () => {
    const token = await login(username, password)

    if (!token) {
      setError('Invalid credentials')
      return
    }

    router.push('/cars_api')
  }

  return (
    <div className="p-10 flex flex-col gap-3 w-80 mx-auto">
      <input className="border p-2" value={username} onChange={(e) => setU(e.target.value)} />
      <input
        className="border p-2"
        type="password"
        value={password}
        onChange={(e) => setP(e.target.value)}
      />
      <button className="bg-blue-600 text-white p-2" onClick={submit}>
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
