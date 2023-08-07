import { useEffect, useState } from 'react'
import theme from '../theme/theme'
import '../styles/global.sass'
import MainLayout from '../layouts/MainLayout'
import { store, wrapper } from '../redux/store'
import { setUserData } from '../redux/slices/user'
import { ThemeProvider } from '@mui/material/styles'
import { Api } from '../api/api'
import { setCategories } from '../redux/slices/categories'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../styles/nprogress.css'
import { setCartItems } from '../redux/slices/cart'
import { Provider } from 'react-redux'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 500,
  showSpinner: false,
})

function ShopApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

ShopApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx, Component }) => {
      try {
        const categories = await Api(ctx).product.getCategories()
        store.dispatch(setCategories(categories))
        const user = await Api(ctx).user.getMe()
        if (user) {
          store.dispatch(setUserData(user))
          const cartItems = await Api(ctx).user.getCart()
          store.dispatch(setCartItems(cartItems))
        }
      } catch (err) {
        if (ctx.asPath === '/admin') {
          ctx.res.writeHead(302, {
            Location: '/403',
          })
          ctx.res.end()
        }
        console.warn(err)
      }

      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
        },
      }
    }
)

export default wrapper.withRedux(ShopApp)
