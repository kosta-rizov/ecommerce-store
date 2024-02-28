
import { FC } from 'react'
import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import Gallery from '@/components/gallery'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import Info from '@/components/info'


interface ProductSinglePageProps {
  params: {productId: string}
}

const ProductSinglePage: FC<ProductSinglePageProps> = async ({params}) => {

    const detailProduct = await getProduct(params.productId)

    const suggestedProductsWithSameCategory = await getProducts({categoryId: detailProduct?.category?.id})

  return (
    <div className='bg-white'>
       <Container>
            <div className='px-4 py-10 sm:px-6 lg:px-8'>
                <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                    {/* GALLERY */}
                    <Gallery images={detailProduct.images}/>

                    {/* INFO */}
                    <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
                    <Info data={detailProduct} />
                    </div>
                </div>

                <hr className='my-10'/>
                <ProductList title="Related Items" items={suggestedProductsWithSameCategory}/>

            </div>     
       </Container>
    </div>
  )
}

export default ProductSinglePage