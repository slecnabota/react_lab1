'use client'

import api from '@/lib/api'

export async function login(username: string, password: string) {
  const res = await api.post('/auth/login', { username, password })

  const headerToken = res.headers['authorization']?.replace('Bearer ', '')
  const token = headerToken || res.data?.token

  if (token) {
    localStorage.setItem('token', token)

    document.cookie = `token=${token}; path=/; secure; samesite=strict`
  }

  return token
}

export async function register(username: string, password: string) {
  const res = await api.post('/auth/register', { username, password })

  const headerToken = res.headers['authorization']?.replace('Bearer ', '')
  const token = headerToken || res.data?.token

  if (token) {
    localStorage.setItem('token', token)
    document.cookie = `token=${token}; path=/; secure; samesite=strict`
  }

  return token
}

export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token')
  }

  document.cookie = 'token=; path=/; max-age=0; secure; samesite=strict'

  window.location.href = '/login'
}
