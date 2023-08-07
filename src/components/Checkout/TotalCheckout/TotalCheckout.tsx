import { useAppSelector } from '../../../redux/hooks'
import FormField from '../../common/FormField'
import Line from '../../UI/Line'
import Grid from '../../common/Grid/Grid'
import Badge from '../../UI/Badge'
import { ICartItem } from '../../../types/CartItem'
import { Box, Button, Typography } from '@mui/material'
import { ICheckoutData } from '../../../types/CheckoutData'
import FlexBox from '../../UI/FlexBox'
import { styled } from '@mui/system'
import Img from '../../Img/Img'
import PriceListItem from './PriceListItem'
import { selectCartData } from '../../../redux/slices/cart'

interface TotalCheckoutProps {
  stepCount: number
  checkoutData: ICheckoutData
  cart: ICartItem[]
}

const StyledTotalCheckout = styled(FlexBox)({
  flexDirection: 'column',
  gap: '30px',
  padding: '50px 40px',
  marginTop: '50px',
  background: '#fff',
  borderRadius: '30px',
  transition: 'transform 1s',
})

const TotalCheckout = ({
  stepCount,
  checkoutData,
  cart,
}: TotalCheckoutProps) => {
  const { cartPrice, cartCount } = useAppSelector(selectCartData)

  const shippingPrice = checkoutData?.shippingMethodPrice || 0
  const shippingPriceToShow = shippingPrice
    ? `$${shippingPrice.toFixed(2)}`
    : ''

  const taxes = (shippingPrice + cartPrice) * 0.07 || 0
  const taxesToShow = taxes ? `$${taxes.toFixed(2)}` : ''

  const totalToPay = (cartPrice + taxes).toFixed(2)

  //fix анимация появления шагов
  return (
    <StyledTotalCheckout
    // style={stepCount === 2 ? { transform: 'translateY(100px)' } : {}}
    >
      <FlexBox sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <FlexBox sx={{ alignItems: 'center', gap: '5px' }}>
          <Typography
            component='span'
            sx={{ fontSize: '32px', fontWeight: 700 }}
          >
            {cartCount}
          </Typography>
          <Typography
            component='span'
            sx={{ fontSize: '26px', fontWeight: 400 }}
          >
            {cartCount === 1 ? 'item' : 'items'}
          </Typography>
        </FlexBox>
        <Button sx={{ color: '#1976d2' }}>EDIT</Button>
      </FlexBox>
      <FlexBox sx={{ flexDirection: 'column', gap: '25px' }}>
        {cart.map(({ id, count, product }) => (
          <FlexBox sx={{ gap: '35px' }} key={id}>
            <Box>
              <Badge badgeContent={count}>
                <Img
                  width={100}
                  height={120}
                  alt={product.name}
                  src={product.previewImg}
                  // sx={{ borderRadius: '13px' }}
                />
              </Badge>
            </Box>
            <FlexBox
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <Typography
                component='span'
                sx={{ fontSize: '24px', fontWeight: 700 }}
              >
                ${product.price}
              </Typography>
              <Typography component='span' sx={{ color: '#c9c6c6' }}>
                {product.name}
              </Typography>
            </FlexBox>
          </FlexBox>
        ))}
      </FlexBox>
      <Line />
      <Grid gap={20}>
        <FormField label='Gift card or discount code' />
        <Button color='success' sx={{ width: '40%', borderRadius: '15px' }}>
          Apply
        </Button>
      </Grid>
      <Line />
      <FlexBox sx={{ flexDirection: 'column', gap: '20px' }}>
        <PriceListItem name='Shipping' price={+shippingPriceToShow} />
        <PriceListItem name='Taxes' price={+taxesToShow} />
        <PriceListItem name='Subtotal' price={+cartPrice} />
      </FlexBox>
      <Line />
      <FlexBox sx={{ justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: '22px', fontWeight: 500 }}>
          Total to Pay
        </Typography>
        <Typography sx={{ fontSize: '34px', fontWeight: 700 }}>
          ${totalToPay}
        </Typography>
      </FlexBox>
    </StyledTotalCheckout>
  )
}

export default TotalCheckout
