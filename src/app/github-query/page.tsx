'use client'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function GithubQueryPage() {
  const fetchRepos = async () => {
    const res = await axios.get('https://api.github.com/search/repositories?q=react')
    return res.data.items
  }

  const { isLoading, isError, data } = useQuery({
    queryKey: ['repos'],
    queryFn: fetchRepos,
  })

  if (isLoading) return <p>Loading</p>
  if (isError) return <p>Error</p>

  return (
    <ul>
      {data.map((repo: any) => (
        <li key={repo.id}>{repo.full_name}</li>
      ))}
    </ul>
  )
}
