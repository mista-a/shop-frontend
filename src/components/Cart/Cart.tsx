import { Button, Drawer, Typography } from '@mui/material'
import React, { useState } from 'react'
import {
  StyledCart,
  StyledCartBadge,
  StyledCartButton,
  StyledCartPrice,
  StyledCheckoutLink,
  StyledImgWrapper,
  StyledProductCard,
  StyledProductDescription,
  StyledProductList,
} from './StyledCart'
import { ReactComponent as CartIcon } from '../../../public/icons/cart-icon.svg'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { deleteProductFromCart, selectCartData } from '../../redux/slices/cart'
import Img from '../Img/Img'
import Link from '../UI/Link/Link'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { ICartItem } from '../../types/CartItem'
import { Api } from '../../api/api'

const Cart = () => {
  const [isCartOpened, setIsCartOpened] = useState(false)

  const { cartItems, cartCount, cartPrice } = useAppSelector(selectCartData)

  const dispatch = useAppDispatch()

  const openCart = () => {
    setIsCartOpened(true)
  }

  const closeCart = () => {
    setIsCartOpened(false)
  }

  const deleteProduct = (
    deletedCartItem: ICartItem,
    deleteProductsCounter: number
  ) => {
    try {
      Api().user.deleteFromCart({
        cartItemId: deletedCartItem.id,
        deleteProductsCounter,
      })
      dispatch(
        deleteProductFromCart({ deletedCartItem, deleteProductsCounter })
      )
    } catch (error) {
      console.warn(error)
    }
  }

  const handleCheckout = () => {
    closeCart()
  }

  return (
    <div>
      <StyledCartBadge badgeContent={cartCount} color='info'>
        <StyledCartButton onClick={openCart}>
          <CartIcon />
          <StyledCartPrice>{cartPrice}$</StyledCartPrice>
        </StyledCartButton>
      </StyledCartBadge>
      <Drawer open={isCartOpened} onClose={closeCart} anchor='right'>
        <StyledCart>
          <StyledProductList>
            {cartItems.length ? (
              cartItems.map(({ product, id, size, count }) => (
                <StyledProductCard key={id}>
                  <Link href={`/product/${product.id}`}>
                    <StyledImgWrapper>
                      <Img src={product.previewImg} />
                    </StyledImgWrapper>
                  </Link>
                  <StyledProductDescription>
                    <Link href={`/product/${product.id}`}>
                      <Typography fontWeight='bold' variant='h6'>
                        ${product.price * count}
                      </Typography>
                      <Typography>{product.name}</Typography>
                      <Typography fontWeight='bold'>
                        ${product.price} x{count}
                      </Typography>
                      <Typography fontWeight='bold'>{size?.name}</Typography>
                    </Link>
                    <Button
                      fullWidth={false}
                      onClick={() =>
                        deleteProduct({ product, count, id, size }, count)
                      }
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  </StyledProductDescription>
                </StyledProductCard>
              ))
            ) : (
              <Typography variant='h4' textAlign='center'>
                Корзин пуста
              </Typography>
            )}
          </StyledProductList>
          {/* <StyledCheckoutLink href='/checkout'> */}
          <Button color='success' onClick={handleCheckout}>
            <Typography>Checkout</Typography>
          </Button>
          {/* </StyledCheckoutLink> */}
        </StyledCart>
      </Drawer>
    </div>
  )
}

export default Cart
