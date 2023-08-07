import { styled } from '@mui/material'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import Img from '../Img/Img'

export const StyledProductCard = styled('div')({
  display: 'flex',
  maxWidth: '365px',
  flexDirection: 'column',
  gap: '5px',
  maxHeight: 'auto',
})

export const StyledProductImgWrapper = styled('div')({
  position: 'relative',
})

export const StyledProductImg = styled(Img)({
  borderRadius: '30px',
  width: '100%',
})

export const StyledFavoriteButton = styled(FavoriteButton)({
  position: 'absolute',
  right: '5px',
  top: '5px',
  padding: '7px',
})

interface StyledProductColorProps {
  rgb: string
}

export const StyledProductColor = styled('div')<StyledProductColorProps>(
  ({ rgb }) => ({
    width: '8px',
    height: '8px',
    borderRadius: '5px',
    opacity: '80%',
    background: rgb,
  })
)
