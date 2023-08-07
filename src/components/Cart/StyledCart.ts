import { Badge, Button, Typography, styled } from '@mui/material'
import Link from '../UI/Link/Link'

export const StyledCartBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 3,
    top: 5,
    minWidth: '29px',
    minHeight: '29px',
    borderRadius: '24px',
    fontWeight: 600,
    [theme.breakpoints.down('mobile')]: {
      display: 'none',
    },
  },
}))

export const StyledCartPrice = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('tablet')]: {
    display: 'none',
  },
}))

export const StyledCartButton = styled(Button)({
  gap: 5,
})

export const StyledCart = styled('div')({
  padding: 15,
  width: '22vw',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
})

export const StyledProductList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
})

export const StyledProductCard = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 10,
  background: theme.palette.primary.dark,
  borderRadius: 20,
  padding: 5,
  transition: 'outline-color 0.3s',
  outline: '1px solid',
  outlineColor: theme.palette.primary.main,
  ':hover': {
    outlineColor: theme.palette.primary.contrastText,
  },
}))

export const StyledImgWrapper = styled('div')({
  position: 'relative',
  height: 225,
  width: '100%',
  borderRadius: 25,
  overflow: 'hidden',
})

export const StyledProductDescription = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
})

export const StyledCheckoutLink = styled(Link)({
  width: 'fit-content',
  marginLeft: 'auto',
})
