import { Box, Typography } from '@mui/material'
import Link from '../UI/Link/Link'
import { IProduct } from '../../types/Product'
import Grid from '../common/Grid/Grid'
import {
  StyledFavoriteButton,
  StyledProductCard,
  StyledProductColor,
  StyledProductImg,
  StyledProductImgWrapper,
} from './StyledProductCard'

interface ProductCardProps {
  product: IProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <StyledProductCard>
      <StyledProductImgWrapper>
        <Link href={`/product/${product.id}`}>
          <StyledProductImg
            layout='fixed'
            width={350}
            height={525}
            src={product.previewImg}
            alt={product.name}
          />
        </Link>
        <StyledFavoriteButton
          initialInFavorite={product.inFavorite}
          productId={product.id}
        />
      </StyledProductImgWrapper>
      <Typography>{product.name}</Typography>
      <Grid gap={5}>
        {/* {product.colors.map(({ rgb }, index: number) => (
          <StyledProductColor rgb={rgb} key={index} />
        ))} */}
      </Grid>
      <Typography>$ {product.price}</Typography>
    </StyledProductCard>
  )
}

export default ProductCard
