'use client'
import axios from 'axios'
import { useState } from 'react'

type Repository = {
  id: number
  full_name: string
  html_url: string
}

export default function GithubPage() {
  const [keyword, setKeyword] = useState('')
  const [repos, setRepos] = useState<Repository[]>([])

  const handleSearch = () => {
    axios
      .get<{ items: Repository[] }>(`https://api.github.com/search/repositories?q=${keyword}`)
      .then((res) => setRepos(res.data.items))
      .catch((e) => console.error(e))
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">GitHub Repo Search</h1>

      <div className="flex gap-3 mt-4">
        <input
          className="border p-2 rounded"
          placeholder="Enter"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSearch}>
          Search
        </button>
      </div>

      {repos.length === 0 ? (
        <p className="mt-6 text-gray-500">No data</p>
      ) : (
        <table className="mt-6 table-auto w-full border-collapse border">
          <tbody>
            {repos.map((repo) => (
              <tr key={repo.id} className="border">
                <td className="p-2">{repo.full_name}</td>
                <td className="p-2">
                  <a className="text-blue-600 underline" href={repo.html_url}>
                    {repo.html_url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}
