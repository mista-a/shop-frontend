import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Api } from '../../api/api'
import ProductList from '../../components/ProductList/ProductList'
import { IColor } from '../../types/Color'
import { IProduct } from '../../types/Product'

interface SubcategoryPageProps {
  defaultProducts: IProduct[]
  productColors: IColor[]
  defaultPage: number
  totalPages: number
}

const SubcategoryPage: NextPage<SubcategoryPageProps> = ({
  defaultProducts,
  defaultPage,
  productColors,
  totalPages,
}) => {
  const [products, setProducts] = useState(defaultProducts)
  const [page, setPage] = useState(defaultPage)

  const router = useRouter()

  useEffect(() => {
    setProducts(defaultProducts)
    setPage(1)
  }, [defaultProducts])

  const fetchNewProducts = async (page: number) => {
    const { category, subcategory } = router.query
    const { products } = await Api().product.getBySubcategory(
      category.toString(),
      subcategory.toString(),
      { page }
    )
    return products
  }

  return (
    <ProductList
      defaultPage={page}
      totalPages={totalPages}
      defaultProducts={defaultProducts}
      fetchNewProducts={fetchNewProducts}
      showFilters
      productColors={productColors}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { category, subcategory, colors, limit, max, min, sort } = ctx.query
  const pageParam = ctx.query.page
  try {
    const { products, productColors, page, totalPages } = await Api(
      ctx
    ).product.getBySubcategory(category.toString(), subcategory.toString(), {
      colors,
      limit: +limit,
      max: +max,
      min: +min,
      page: +pageParam,
      sort: sort?.toString(),
    })
    return {
      props: {
        defaultProducts: products,
        productColors,
        defaultPage: page,
        totalPages,
      },
    }
  } catch (err) {
    console.warn(err)
    return {
      notFound: true,
    }
  }
}

export default SubcategoryPage
