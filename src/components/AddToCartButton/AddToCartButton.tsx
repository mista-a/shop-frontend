import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectUserData } from '../../redux/slices/user'
import {
  addProductToCart,
  resetCart,
  setCartItems,
} from '../../redux/slices/cart'
import { toggleAuthDialog } from '../../redux/slices/authDialog'
import { Button, Typography } from '@mui/material'
import { Api } from '../../api/api'

interface AddToCartButtonProps {
  counter: number
  price: number
  productId: number
  sizeId: number
}

const AddToCartButton = ({
  counter,
  price,
  productId,
  sizeId,
}: AddToCartButtonProps) => {
  const [isFetching, setIsFetching] = useState(false)

  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUserData)

  const disabled = isFetching || !sizeId

  const addCartItem = async () => {
    if (user.id) {
      setIsFetching(true)
      try {
        const addedCartItem = await Api().user.addToCart({
          count: counter,
          productId,
          sizeId,
        })
        dispatch(addProductToCart({ addedCartItem, count: counter }))
      } catch (err) {
        console.warn(err)
      }
      setIsFetching(false)
    } else {
      dispatch(toggleAuthDialog())
    }
  }

  useEffect(() => {
    const updateCart = async () => {
      if (user.id) {
        const cartItems = await Api().user.getCart()
        dispatch(setCartItems(cartItems))
      } else {
        dispatch(resetCart())
      }
    }

    updateCart()
  }, [user.id, dispatch])

  return (
    <Button onClick={addCartItem} color='success' disabled={disabled}>
      <Typography>{sizeId ? 'Add to cart' : 'Please select size'}</Typography>
    </Button>
  )
}

export default AddToCartButton
