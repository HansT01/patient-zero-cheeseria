import cheeses from '@/cheeses.json'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-accent text-accent-fg container mx-auto flex min-h-svh max-w-screen-lg flex-col gap-8 p-8 sm:p-4'>
      <h1 className='text-4xl'>PZ Cheeseria</h1>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl'>Cheeses</h2>
        <div className='flex flex-col gap-4'>
          {cheeses.map((cheese) => {
            return (
              <div id={cheese.id} className='flex gap-4'>
                <Image src={`/images/${cheese.id}.jpg`} alt={cheese.name} width={480} height={480} />
                <h2 className='text-2xl capitalize'>{cheese.name}</h2>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl'>Price breakdown</h2>
        <table className='bg-background text-background-fg'>
          <thead>
            <tr>
              <th className='border-primary border px-4 py-2'>Cheese</th>
              <th className='border-primary border px-4 py-2'>Price</th>
              <th className='border-primary border px-4 py-2'>Quantity</th>
              <th className='border-primary border px-4 py-2'>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-primary border px-4 py-2'>Cheddar</td>
              <td className='border-primary border px-4 py-2'>$13.90/kg</td>
              <td className='border-primary border px-4 py-2'>600g</td>
              <td className='border-primary border px-4 py-2'>$8.34</td>
            </tr>
            <tr>
              <td className='border-primary border px-4 py-2'>Cheddar</td>
              <td className='border-primary border px-4 py-2'>$13.90/kg</td>
              <td className='border-primary border px-4 py-2'>300g</td>
              <td className='border-primary border px-4 py-2'>$4.17</td>
            </tr>
            <tr>
              <td colSpan={3} className='border-primary border px-4 py-2' />
              <td className='border-primary border px-4 py-2'>$12.51</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
