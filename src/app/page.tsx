'use client'

import CheesesJSON from '@/data/cheeses.json'
import { formatMoney, formatQuantity } from '@/utils/format'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

interface CheesePanelProps {
  cheese: (typeof CheesesJSON)[number]
  onQuantityChange: (quantity: number) => void
}

const CheesePanel = (props: CheesePanelProps) => {
  const [quantity, setQuantity] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value)
    const value = parseFloat(e.target.value)
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
            onChange={handleChange}
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

  const totalPrice = cheeses.reduce((acc, cheese) => acc + cheese.price_per_kilo * cheese.quantity, 0)

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
              <th className='border-primary grow border px-4 py-2 sm:w-1/4'>Cheese</th>
              <th className='border-primary grow border px-4 py-2 sm:w-1/4'>Price</th>
              <th className='border-primary grow border px-4 py-2 sm:w-1/4'>Quantity</th>
              <th className='border-primary grow border px-4 py-2 sm:w-1/4'>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cheeses.map((cheese) => {
              if (cheese.quantity <= 0) {
                return
              }
              return (
                <tr>
                  <td className='border-primary border px-4 py-2 capitalize'>{cheese.name}</td>
                  <td className='border-primary border px-4 py-2'>{formatMoney(cheese.price_per_kilo)}/kg</td>
                  <td className='border-primary border px-4 py-2'>{formatQuantity(cheese.quantity)}</td>
                  <td className='border-primary border px-4 py-2'>
                    {formatMoney(cheese.price_per_kilo * cheese.quantity)}
                  </td>
                </tr>
              )
            })}
            <tr>
              <td colSpan={3} className='border-primary border px-4 py-2' />
              <td className='border-primary bg-primary text-primary-fg border px-4 py-2'>{formatMoney(totalPrice)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Home
