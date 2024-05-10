'use client'

import CheesesJSON from '@/cheeses.json'
import Image from 'next/image'
import { useState } from 'react'

interface CheesePanelProps {
  cheese: (typeof CheesesJSON)[number]
  onQuantityChange: (quantity: number) => void
}

const CheesePanel = (props: CheesePanelProps) => {
  const [quantity, setQuantity] = useState('')

  const handleBlur = () => {
    const value = parseFloat(quantity)
    if (isNaN(value) || value <= 0) {
      props.onQuantityChange(0)
    } else {
      props.onQuantityChange(value)
    }
  }

  return (
    <div className='bg-background text-background-fg flex overflow-hidden rounded-lg border'>
      <div className='h-[240px] w-1/3'>
        <Image
          src={`/images/${props.cheese.id}.jpg`}
          className='h-full w-full object-cover'
          alt={props.cheese.name}
          width={480}
          height={480}
        />
      </div>
      <div className='flex grow flex-col gap-2 p-8'>
        <h2 className='text-4xl font-light capitalize'>{props.cheese.name}</h2>
        <div className='flex flex-col'>
          <div className='capitalize'>Colour: {props.cheese.colour}</div>
          <div>Price: ${props.cheese.price_per_kilo}/kg</div>
        </div>
        <div className='mt-auto flex items-center gap-4'>
          <div>Quantity (kg):</div>
          <input
            type='text'
            pattern='[0-9]+([\.,][0-9]+)?'
            autoComplete='none'
            value={quantity}
            onFocus={(e) => e.target.select()}
            onChange={(e) => setQuantity(e.target.value)}
            onBlur={handleBlur}
            className='bg-secondary text-secondary-fg w-full min-w-0 max-w-[160px] rounded-lg px-2 py-1'
          />
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  const [cheeses, setCheeses] = useState(
    CheesesJSON.map((cheese) => {
      return { ...cheese, quantity: 0 }
    }),
  )

  return (
    <main className='bg-accent text-accent-fg container mx-auto flex min-h-svh max-w-screen-lg flex-col gap-8 p-4 sm:p-8'>
      <h1 className='text-center text-6xl font-extralight'>PZ Cheeseria</h1>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl'>Cheeses</h2>
        <div className='flex flex-col gap-4'>
          {cheeses.map((cheese) => {
            return (
              <div id={cheese.id}>
                <CheesePanel
                  cheese={cheese}
                  onQuantityChange={(quantity) =>
                    setCheeses(cheeses.map((c) => (c === cheese ? { ...cheese, quantity } : c)))
                  }
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl'>Price Breakdown</h2>
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
              <td className='border-primary bg-primary text-primary-fg border px-4 py-2'>$12.51</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Home
