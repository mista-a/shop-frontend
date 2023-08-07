import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Api } from '../../api/api'
import ProductList from '../../components/ProductList/ProductList'
import { FilterProductPage } from '../../types/FilterProductPage'
import { IProduct } from '../../types/Product'

interface SearchPageProps extends FilterProductPage {
  defaultProducts: IProduct[]
}

const SearchPage: NextPage<SearchPageProps> = ({
  defaultProducts,
  page,
  totalPages,
}) => {
  const router = useRouter()
  const { name } = router.query

  const fetchNewProducts = async (page: number): Promise<IProduct[]> => {
    const { products } = await Api().product.get({
      name: name.toString(),
      page,
    })
    return products
  }

  return (
    <ProductList
      fetchNewProducts={fetchNewProducts}
      defaultPage={page}
      totalPages={totalPages}
      defaultProducts={defaultProducts}
      productColors={[]}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { name } = ctx.query
  try {
    const { products, totalPages, page } = await Api(ctx).product.get({
      name: name.toString(),
    })
    return { props: { defaultProducts: products, totalPages, page } }
  } catch (err) {
    console.log(err)
    return {
      notFound: true,
    }
  }
}

export default SearchPage
