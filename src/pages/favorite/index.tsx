import { GetServerSideProps, NextPage } from 'next'
import { Api } from '../../api/api'
import ProductList from '../../components/ProductList/ProductList'
import { IProduct } from '../../types/Product'
import { FilterProductPage } from '../../types/FilterProductPage'

interface FavoriteProps extends FilterProductPage {
  favorites: IProduct[]
}

const Favorite: NextPage<FavoriteProps> = ({ page, totalPages, favorites }) => {
  const fetchNewProducts = async () => {
    const { favorites } = await Api().user.getFavorites()
    return favorites
  }

  return (
    <ProductList
      defaultPage={page}
      totalPages={totalPages}
      defaultProducts={favorites}
      fetchNewProducts={fetchNewProducts}
      productColors={[]}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { favorites, totalProducts, totalPages, page } = await Api(
      ctx
    ).user.getFavorites()
    return { props: { favorites, totalProducts, totalPages, page } }
  } catch (err) {
    console.warn(err)
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

export default Favorite
