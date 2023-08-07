import React, { useEffect, useState } from 'react'
// import styles from './Home.module.sass'
import { Typography } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'
import { Api } from '../../api/api'
import ProductList from '../../components/ProductList/ProductList'
import { HomeProps } from '../../pages'

const Home: React.FC<HomeProps> = ({ deafultProducts, page, totalPages }) => {
  const [products, setProducts] = useState(deafultProducts)

  const user = useAppSelector((state) => state.user).data

  useEffect(() => {
    const getProducts = async () => {
      const { products } = await Api().product.get()
      setProducts(products)
    }

    if (user.id) getProducts()
  }, [user.id])

  const fetchNewProducts = async (page: number) => {
    const { products } = await Api().product.get({ page })
    return products
  }

  return (
    <>
      <Typography variant='h4'>Most popular</Typography>
      <ProductList
        totalPages={totalPages}
        defaultPage={page}
        fetchNewProducts={fetchNewProducts}
        defaultProducts={products}
        productColors={[]}
      />
    </>
  )
}

export default Home
