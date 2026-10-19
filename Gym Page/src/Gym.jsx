import { useState } from 'react'

const plans = [
  { name: 'Starter', price: 19, items: ['Gym floor access', 'Locker room'] },
  { name: 'Strength', price: 39, items: ['Everything in Starter', 'All group classes', 'Monthly body check'], featured: true },
  { name: 'Coached', price: 89, items: ['Everything in Strength', '4 personal sessions', 'Meal guidance'] },
]
const stats = [['24', 'weekly classes'], ['12', 'coaches'], ['19h', 'open daily']]
const field = 'w-full bg-transparent border border-[var(--line)] rounded-md px-4 py-3 focus:outline focus:outline-2 focus:outline-[var(--acc)]'

export default function Gym() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const submit = () => {
    if (!name.trim() || !email.includes('@')) return setMsg('Enter your name and a valid email.')
    setMsg(`Thanks ${name}, your day pass request was sent.`)
  }

  return (
    <div>
      <header className="max-w-5xl mx-auto px-5 py-5 flex items-center justify-between">
        <span className="disp text-2xl font-extrabold">Ironyard Gym</span>
        <nav className="flex gap-5 text-sm text-[var(--mute)]">
          <a href="#plans">Plans</a>
          <a href="#join">Join</a>
        </nav>
      </header>

      <section className="max-w-5xl mx-auto px-5 pt-10 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="disp text-6xl md:text-7xl font-extrabold leading-[0.95]">Lift heavy.<br />Leave lighter.</h1>
          <p className="mt-5 text-lg text-[var(--mute)] max-w-md">
            Open 5am to midnight. Free weights, coached classes and a floor that is never crowded.
          </p>
          <a href="#join" className="inline-block mt-7 bg-[var(--acc)] text-[var(--accink)] font-semibold px-6 py-3 rounded-md hover:brightness-95">
            Book a free day pass
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          {stats.map(([n, l]) => (
            <div key={l} className="card py-8">
              <div className="disp text-5xl font-extrabold">{n}</div>
              <div className="text-sm text-[var(--mute)]">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="max-w-5xl mx-auto px-5 py-14">
        <h2 className="disp text-4xl font-extrabold mb-8">Pick a plan</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div key={p.name} className={`card p-6 ${p.featured ? '!border-2 !border-[var(--acc)]' : ''}`}>
              <h3 className="disp text-2xl font-bold">{p.name}</h3>
              <p className="mt-2 text-4xl font-semibold">${p.price}<span className="text-base text-[var(--mute)]">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--mute)]">
                {p.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="max-w-5xl mx-auto px-5 py-14">
        <div className="card p-6 md:p-10 max-w-xl">
          <h2 className="disp text-4xl font-extrabold">Book your free day pass</h2>
          <div className="mt-6 space-y-4">
            <input className={field} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className={field} type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={submit} className="bg-[var(--acc)] text-[var(--accink)] font-semibold px-6 py-3 rounded-md hover:brightness-95">
              Send request
            </button>
            <p className="text-sm text-[var(--mute)]" role="status">{msg}</p>
          </div>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-5 py-10 text-sm text-[var(--mute)]">
        Demo project built with React and Tailwind CSS. Ironyard Gym is a fictional business.
      </footer>
    </div>
  )
}
