'use client'

import type CheesesJSON from '@/data/cheeses.json'
import { formatMoney, formatQuantity } from '@/utils/format'
import { useState } from 'react'
import { CheesePanel } from './CheesePanel'

interface CheesesProps {
  cheeses: typeof CheesesJSON
}

export const CheesesView = (props: CheesesProps) => {
  const [cheeses, setCheeses] = useState(
    props.cheeses.map((cheese) => {
      return { ...cheese, quantity: 0 }
    }),
  )

  const totalPrice = cheeses.reduce((acc, cheese) => acc + cheese.price_per_kilo * cheese.quantity, 0)

  return (
    <div className='flex flex-col gap-8'>
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
              <th className='border-primary border px-4 py-2 max-sm:w-1/2 sm:w-1/4'>Cheese</th>
              <th className='border-primary border px-4 py-2 max-sm:hidden sm:w-1/4'>Price</th>
              <th className='border-primary border px-4 py-2 max-sm:hidden sm:w-1/4'>Quantity</th>
              <th className='border-primary border px-4 py-2 max-sm:w-1/2 sm:w-1/4'>Total Price</th>
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
                  <td className='border-primary border px-4 py-2 max-sm:hidden'>
                    {formatMoney(cheese.price_per_kilo)}/kg
                  </td>
                  <td className='border-primary border px-4 py-2 max-sm:hidden'>{formatQuantity(cheese.quantity)}</td>
                  <td className='border-primary border px-4 py-2'>
                    {formatMoney(cheese.price_per_kilo * cheese.quantity)}
                  </td>
                </tr>
              )
            })}
            <tr>
              <td colSpan={3} className='border-primary border px-4 py-2 max-sm:hidden' />
              <td colSpan={1} className='border-primary border px-4 py-2 sm:hidden' />
              <td className='border-primary bg-primary text-primary-fg border px-4 py-2'>{formatMoney(totalPrice)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
