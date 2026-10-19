import { useState } from 'react'

const tabs = ['Overview', 'Orders', 'Customers']
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const values = [38, 52, 44, 61, 70, 36, 41]
const stats = [
  { label: 'Revenue', value: '$12,480', change: '+8.2%', good: true },
  { label: 'Orders', value: '342', change: '+3.1%', good: true },
  { label: 'Refunds', value: '9', change: '+2', good: false },
]
const orders = [
  ['#1042', 'Ayesha Khan', '$86', 'Shipped'],
  ['#1041', 'Daniel Ross', '$240', 'Paid'],
  ['#1040', 'Mia Chen', '$52', 'Refunded'],
]

export default function Dashboard() {
  const [tab, setTab] = useState('Overview')
  const [sel, setSel] = useState(null)
  const max = Math.max(...values)

  return (
    <div className="min-h-screen md:flex" style={{ '--acc': '#2f6fed' }}>
      <aside className="md:w-56 card md:rounded-none md:border-y-0 md:border-l-0 p-4 flex md:block gap-2 overflow-x-auto">
        <div className="font-bold text-lg md:mb-6 pr-4">Orderly</div>
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm whitespace-nowrap ${tab === t ? 'bg-[var(--bg)] font-medium' : 'text-[var(--mute)]'}`}
          >
            {t}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-5 md:p-8 max-w-4xl">
        <h1 className="text-2xl font-bold">{tab}</h1>
        <p className="text-sm text-[var(--mute)] mt-1">Last 7 days. Select a bar to see that day.</p>

        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          {stats.map((s) => (
            <div key={s.label} className="card p-4">
              <div className="text-sm text-[var(--mute)]">{s.label}</div>
              <div className="text-2xl font-bold mt-1">{s.value}</div>
              <div className={`text-sm mt-1 ${s.good ? 'text-[#1c8a4e]' : 'text-[#c0392b]'}`}>{s.change}</div>
            </div>
          ))}
        </div>

        <div className="card p-5 mt-4">
          <div className="flex justify-between">
            <h2 className="font-bold">Orders per day</h2>
            <span className="text-sm text-[var(--mute)]">{sel === null ? 'Pick a day' : `${days[sel]}: ${values[sel]} orders`}</span>
          </div>
          <div className="flex items-end gap-3 h-40 mt-5">
            {values.map((v, i) => (
              <button
                key={days[i]}
                aria-label={`${days[i]}: ${v} orders`}
                onClick={() => setSel(i)}
                style={{ height: `${(v / max) * 100}%`, background: sel === i ? 'var(--acc)' : '#c9d8fb' }}
                className="flex-1 rounded-t-md hover:brightness-90"
              />
            ))}
          </div>
          <div className="flex gap-3 mt-2 text-xs text-[var(--mute)]">
            {days.map((d) => <span key={d} className="flex-1 text-center">{d}</span>)}
          </div>
        </div>

        <div className="card mt-4 overflow-x-auto">
          <table className="w-full text-sm min-w-[420px]">
            <thead className="text-left text-[var(--mute)]">
              <tr>{['Order', 'Customer', 'Total', 'Status'].map((h) => <th key={h} className="p-3 font-medium">{h}</th>)}</tr>
            </thead>
            <tbody>
              {orders.map((r) => (
                <tr key={r[0]} className="border-t border-[var(--line)]">
                  {r.map((c) => <td key={c} className="p-3">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
