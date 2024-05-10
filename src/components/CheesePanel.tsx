'use client'

import type CheesesJSON from '@/data/cheeses.json'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

interface CheesePanelProps {
  cheese: (typeof CheesesJSON)[number]
  onQuantityChange: (quantity: number) => void
}

export const CheesePanel = (props: CheesePanelProps) => {
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
    <div className='bg-background text-background-fg flex overflow-hidden rounded-lg border max-sm:flex-col'>
      <div className='h-[220px] w-1/3 max-sm:w-full'>
        <Image
          src={`/images/${props.cheese.id}.jpg`}
          className='h-full w-full object-cover'
          alt={props.cheese.name}
          width={480}
          height={480}
        />
      </div>
      <div className='flex h-[220px] grow flex-col gap-2 p-8'>
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
