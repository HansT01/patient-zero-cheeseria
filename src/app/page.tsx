'use client'

import CheesesView from '@/components/cheeses-view'
import type CheesesJSON from '@/data/cheeses.json'
import { useEffect, useState } from 'react'

const Home = () => {
  const [cheeses, setCheeses] = useState<typeof CheesesJSON | null>(null)

  useEffect(() => {
    const getCheeses = async () => {
      const res = await fetch('/api')
      const cheeses: typeof CheesesJSON = await res.json()
      return cheeses
    }
    getCheeses().then(setCheeses)
  }, [])

  return (
    <div className='dark:dark bg-background text-background-fg'>
      <main className='container mx-auto flex min-h-svh max-w-screen-lg flex-col gap-8 bg-accent p-8 text-accent-fg max-sm:p-8'>
        <h1 className='text-center text-6xl font-extralight'>PZ Cheeseria</h1>
        {cheeses && <CheesesView cheeses={cheeses} />}
      </main>
    </div>
  )
}

export default Home
