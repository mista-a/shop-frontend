import { Typography } from '@mui/material'
import { FC } from 'react'
import Img from '../../Img/Img'
import FlexBox from '../../UI/FlexBox'

interface ShippingMethodProps {
  logo: string
  name: string
  deliveryTime: number
  price: number
  active?: boolean
}

const ShippingMethod: FC<ShippingMethodProps> = ({
  logo,
  name,
  deliveryTime,
  price,
  active = false,
}) => {
  return (
    <FlexBox
      sx={{
        alignItems: 'center',
        gap: '20px',
        width: '400px',
        borderRadius: '20px',
        padding: '15px',
        backgroundColor: '#f5f4f4',
        transition: 'margin-left .3s, backgrond-color 1233s',
        border: '2px solid #eeeeee',
        opacity: '.65',
        userSelect: 'none',
        '&:hover': {
          cursor: 'pointer',
        },
        ...(active && {
          marginLeft: '30px',
          backgroundColor: '#e2f5f8',
          opacity: 1,
        }),
        ...(!active && {
          '&:active': {
            transform: 'scale(.97)',
          },
        }),
      }}
    >
      <Img
        width={55}
        height={55}
        draggable='false'
        src={logo}
        alt={`${name} logo`}
      />
      <FlexBox sx={{ flexDirection: 'column', gap: '3px' }}>
        <Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>
        <Typography sx={{ width: '165px' }}>
          {`Expected delivery: ${deliveryTime} days`}
        </Typography>
      </FlexBox>
      <Typography
        variant='body1'
        sx={{ fontWeight: 'bold', ml: 'auto', mr: '10px' }}
      >
        ${price}
      </Typography>
    </FlexBox>
  )
}

export default ShippingMethod
