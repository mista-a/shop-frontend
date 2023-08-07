import { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { IProduct } from '../../types/Product'
import InfiniteScroll from 'react-infinite-scroll-component'
import { StyledProductListGrid } from './StyledProductListx'
import Filters from '../common/Filters/Filters'
import { IColor } from '../../types/Color'

interface ProductListProps {
  defaultProducts: IProduct[]
  totalPages: number
  defaultPage: number
  fetchNewProducts: (page: number) => Promise<IProduct[]>
  showFilters?: boolean
  productColors: IColor[]
}

const ProductList: React.FC<ProductListProps> = ({
  defaultProducts,
  totalPages,
  defaultPage,
  fetchNewProducts,
  showFilters = false,
  productColors,
}) => {
  const [products, setProducts] = useState(defaultProducts)
  const [page, setPage] = useState(defaultPage)

  useEffect(() => {
    setProducts(defaultProducts)
    setPage(defaultPage)
  }, [defaultProducts])

  const getNewProducts = async () => {
    const newProducts = await fetchNewProducts(page + 1)
    setPage(page + 1)
    setProducts([...products, ...newProducts])
  }

  return (
    <>
      {showFilters && <Filters colors={productColors} />}
      {/* <InfiniteScroll
        dataLength={products.length}
        next={getNewProducts}
        hasMore={page < totalPages}
        loader={<h3>Loading...</h3>}
      > */}
      <StyledProductListGrid>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />
        })}
      </StyledProductListGrid>
      {/* </InfiniteScroll> */}
    </>
  )
}

export default ProductList
