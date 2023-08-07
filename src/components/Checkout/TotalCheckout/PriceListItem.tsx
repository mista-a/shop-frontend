import { Typography } from '@mui/material'
import { FC } from 'react'
import FlexBox from '../../UI/FlexBox'

interface PriceListItemProps {
  name: string
  price: number
}

const PriceListItem: FC<PriceListItemProps> = ({ name, price }) => {
  return (
    <FlexBox sx={{ justifyContent: 'space-between' }}>
      <Typography component='span'>{name}</Typography>
      <Typography component='span' sx={{ fontWeight: 700 }}>
        ${price}
      </Typography>
    </FlexBox>
  )
}

export default PriceListItem
