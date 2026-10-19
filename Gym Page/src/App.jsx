import { useState } from 'react'
import Gym from './Gym.jsx'
import Dashboard from './Dashboard.jsx'

export default function App() {
  const [page, setPage] = useState('gym')
  const btn = (id) =>
    `px-4 py-2 text-sm rounded-md ${page === id ? 'bg-[var(--acc)] text-[var(--accink)] font-semibold' : 'text-[var(--mute)]'}`

  return (
    <>
      <div className="flex gap-2 p-3 border-b border-[var(--line)] justify-center">
        <button className={btn('gym')} onClick={() => setPage('gym')}>Gym Landing Page</button>
        <button className={btn('dash')} onClick={() => setPage('dash')}>Dashboard UI</button>
      </div>
      {page === 'gym' ? <Gym /> : <Dashboard />}
    </>
  )
}
