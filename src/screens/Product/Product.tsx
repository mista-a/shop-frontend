import SimularProducts from '../../components/SimularProducts/SimularProducts'
import { Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import Counter from '../../components/common/Counter/Counter'
import { ProductProps } from '../../pages/product/[id]'
import {
  StyledAddToCart,
  StyledProduct,
  StyledProductDescription,
} from './ProductStyles'
import { StyledProductHeader } from './AboutProduct/AboutProductStyles'
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton'
import Slider from '../../components/Slider/Slider'
import SizeSelector from '../../components/SizeSelector/SizeSelector'
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton'
import { ISize } from '../../types/Size'

const Product: React.FC<ProductProps> = ({ product }) => {
  const [counter, setCounter] = useState(1)
  const [sizeId, setSizeId] = useState(null)

  const setNewSizeId = (sizeId: number) => {
    let hasPreviewsSize = false
    for (const size of product.sizes) {
      if (size.id === sizeId) {
        hasPreviewsSize = true
        break
      }
    }
    if (hasPreviewsSize) setSizeId(sizeId)
    if (!hasPreviewsSize) setSizeId(null)
  }

  const simularProducts = useCallback(() => {
    return [product, ...product.simularProducts]
  }, [])

  return (
    <StyledProduct>
      <Slider slides={product.imgs} />
      <StyledProductDescription>
        <StyledProductHeader>
          <div>
            <Typography variant='h5'>{product.name}</Typography>
            <Typography fontWeight='bold'>$ {product.price}</Typography>
          </div>
          <FavoriteButton
            productId={product.id}
            initialInFavorite={product.inFavorite}
          />
        </StyledProductHeader>
        <SizeSelector
          selectSize={setNewSizeId}
          selectedSizeId={sizeId}
          sizes={product.sizes}
        />
        <SimularProducts simularProducts={simularProducts()} />
        <StyledAddToCart>
          <AddToCartButton
            price={product.price}
            productId={product.id}
            counter={counter}
            sizeId={sizeId}
          />
          <Counter counter={counter} setCounter={setCounter} />
        </StyledAddToCart>
      </StyledProductDescription>
    </StyledProduct>
  )
}

export default Product
