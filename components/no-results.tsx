import { FC } from 'react'

interface NoResultsProps {
  
}

const NoResults: FC<NoResultsProps> = ({}) => {
  return (
    <div className='flex items-center justify-center h-full w-full text-neutral-500'>
        No Featured Products.
    </div>
  )
}

export default NoResults