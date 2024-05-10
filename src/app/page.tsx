import { GET as getCheeses } from '@/app/api/route'
import { CheesesView } from '@/components/CheesesView'
import type CheesesJSON from '@/data/cheeses.json'

const Home = async () => {
  const res = await getCheeses()
  const cheeses: typeof CheesesJSON = await res.json()
  return (
    <main className='bg-accent text-accent-fg container mx-auto flex min-h-svh max-w-screen-lg flex-col gap-8 p-8 max-sm:p-8'>
      <h1 className='text-center text-6xl font-extralight'>PZ Cheeseria</h1>
      <CheesesView cheeses={cheeses} />
    </main>
  )
}

export default Home
