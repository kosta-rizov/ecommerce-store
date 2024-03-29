"use client"

import { Product } from '@/types'
import Image from 'next/image'
import { FC, MouseEventHandler } from 'react'
import IconButton from './icon-button'
import { Expand, Fullscreen, ShoppingCart } from 'lucide-react'
import Currency from './currency'
import { useRouter } from 'next/navigation'
import usePreviewModal from '@/hooks/use-preview-modal'
import useCart from '@/hooks/use-cart'

interface ProductCardProps {
  data: Product
}

const ProductCard: FC<ProductCardProps> = ({data}) => {

    const router = useRouter()
    const previewmodal = usePreviewModal()
    const cart = useCart()

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        previewmodal.onOpen(data)
    }

    const onAddToCart:MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        cart.addItem(data)
    }

  return (
    <div onClick={handleClick} className='bg-white group cursor-pointer roundet-xl border p-3 space-y-4'>
        {/* IMAGE */}
        <div className='aspect-square roundet-xl bg-gray-100 relative'>
            <Image 
                src={data?.images?.[0].url}
                fill
                alt="Images"
                className='aspect-square object-cover rounded-md'
            />
            <div className='opacity-0  group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                <div className='flex gap-x-6 justify-center'>
                    <IconButton 
                    onClick={onPreview}
                    icon={<Expand size={20}/>}
                    />
                    <IconButton 
                    onClick={handleClick}
                    icon={<Fullscreen size={20}/>}
                    />
                    <IconButton 
                    onClick={onAddToCart}
                    icon={<ShoppingCart size={20}/>}
                    />
                </div>
            </div>
        </div>
        {/* DESCRIPTION */}
        <div>
            <p className='font-bold text-lg'>{data.name}</p>
            <p className="text-sm text-gray-500">{data.category?.name}</p>
        </div>
        {/* PRICE */}
        <div className='flex items-center justify-between'>
            <Currency value={data?.price}/>
        </div>
    </div>
  )

}
export default ProductCard