import { Api } from '../../api/api'
import { GetServerSideProps, NextPage } from 'next'
import { IProduct } from '../../types/Product'
import Product from '../../screens/Product/Product'

export interface ProductProps {
  product: IProduct
}

const ProductPage: NextPage<ProductProps> = (props) => {
  // return <div></div>
  return <Product {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params
  try {
    const product = await Api(ctx).product.getById(+id)
    return { props: { product } }
    // return {
    //   props: {
    //     product: {
    //       id: 1,
    //       name: '1',
    //       price: 1,
    //       previewImg: '',
    //       imgs: [''],
    //       colors: [],
    //       inFavorite: false,
    //       sizes: [],
    //       description: '',
    //       simularProducts: [],
    //     },
    //   },
    // }
  } catch (err) {
    console.warn(err)
    return {
      notFound: true,
    }
  }
}

export default ProductPage
