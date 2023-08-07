import { IProduct } from '../../types/Product'
import React, { useState } from 'react'
import Img from '../Img/Img'
import Link from '../UI/Link/Link'
import Grid from '../common/Grid/Grid'
import { StyledSimularProduct } from './SimularProductsStyles'

interface SimularProductsProps {
  simularProducts: IProduct[]
}

const SimularProducts = ({ simularProducts }: SimularProductsProps) => {
  const [activeSimularProduct, setActiveSimularProduct] = useState(
    simularProducts[0].id
  )

  return (
    <Grid gap={20}>
      {simularProducts.map(({ id, previewImg }) => (
        <StyledSimularProduct
          key={id}
          variant='text'
          active={activeSimularProduct === id}
          onClick={() => setActiveSimularProduct(id)}
        >
          <Link href={`/product/${id}`}>
            <Img layout='fixed' height={104} width={70} src={previewImg} />
          </Link>
        </StyledSimularProduct>
      ))}
    </Grid>
  )
}

export default React.memo(SimularProducts)
