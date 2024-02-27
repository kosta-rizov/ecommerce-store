"use client"
import { FC, useEffect, useState } from 'react'

interface CurrencyProps {
  value: string | number;
}

const Formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const Currency: FC<CurrencyProps> = ({value}) => {

    const [ isMounted, setIsMounted ] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted) {
        return null
    }

  return (
    <div className=''>
        {Formatter.format(Number(value)) }
    </div>
  )
}

export default Currency