import Image from 'next/image'
import cheeses from '../cheeses.json'

export default function Home() {
  return (
    <main className='bg-background text-background-fg flex min-h-svh flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl'>PZ Cheeseria</h1>
      <div className='flex flex-col gap-4'>
        {cheeses.map((cheese) => {
          return (
            <div id={cheese.id} className='flex gap-4'>
              <Image src={`/images/${cheese.id}.jpg`} alt={cheese.name} width={200} height={200} />
              <h2 className='text-2xl capitalize'>{cheese.name}</h2>
            </div>
          )
        })}
      </div>
    </main>
  )
}
