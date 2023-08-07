import { useState } from 'react'
import { Api } from '../../api/api'
import styles from './Cart.module.sass'
import { useAppSelector } from '../../redux/hooks'
import { selectUserData } from '../../redux/slices/user'
import { ICartItem } from '../../types/CartItem'
import { GetServerSideProps, NextPage } from 'next'
import { Box, Button, Typography } from '@mui/material'
import Link from '../../components/UI/Link/Link'
// import Checkout from '../../components/cart/Checkout/Checkout'
import { selectCartData } from '../../redux/slices/cart'

// interface CartProps {
//   cartItems: ICartItem[]
// }

const CartPage: NextPage = () => {
  const { cartItems } = useAppSelector(selectCartData)

  // <Checkout cart={cartItems} />
  return <></>
}

export default CartPage
