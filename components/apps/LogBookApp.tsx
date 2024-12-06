'use client'

import { useState, useEffect } from 'react'

interface LogEntry {
  id: string
  content: string
  timestamp: string
}

export default function LogbookApp() {
  const [entries, setEntries] = useState<LogEntry[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('logbook-entries')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })
  const [currentEntry, setCurrentEntry] = useState('')

  useEffect(() => {
    localStorage.setItem('logbook-entries', JSON.stringify(entries))
  }, [entries])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentEntry.trim()) return

    const newEntry: LogEntry = {
      id: Date.now().toString(),
      content: currentEntry,
      timestamp: new Date().toLocaleString()
    }

    setEntries([newEntry, ...entries])
    setCurrentEntry('')
  }

  return (
    <div className="h-full flex flex-col gap-4 p-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <textarea
          value={currentEntry}
          onChange={(e) => setCurrentEntry(e.target.value)}
          placeholder="Write your log entry..."
          className="w-full p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Save Entry
        </button>
      </form>
      
      <div className="flex-1 overflow-auto">
        {entries.map((entry) => (
          <div key={entry.id} className="mb-4 p-3 bg-gray-50 rounded">
            <div className="text-sm text-gray-500 mb-1">{entry.timestamp}</div>
            <div className="whitespace-pre-wrap">{entry.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

