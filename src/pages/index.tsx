import { Api } from '../api/api'
import { GetServerSideProps, NextPage } from 'next'
import { FilterProductPage } from '../types/FilterProductPage'
import Home from '../screens/Home/Home'
import { IProduct } from '../types/Product'

export interface HomeProps extends FilterProductPage {
  deafultProducts: IProduct[]
}

const HomePage: NextPage<HomeProps> = (props) => {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { products, totalPages, page } = await Api(ctx).product.get()
    return { props: { deafultProducts: products, totalPages, page } }
    // return { props: { defultProducts: [], totalPages: 1 } }
  } catch (err) {
    console.warn(err)
    return {
      notFound: true,
    }
  }
}

export default HomePage
