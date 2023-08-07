import { styled } from '@mui/material'
import Img from '../../components/Img/Img'
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton'

// .optionsHeader
//     display: flex
//     column-gap: 20px

export const StyledProduct = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 30,
  height: 900,
})

export const StyledProductDescription = styled('div')({
  width: 500,
  display: 'flex',
  gap: 20,
  flexDirection: 'column',
})

export const StyledSmallProductImg = styled(Img)({
  maxWidth: 368,
  width: '100%',
  maxHeight: 559,
  height: '100%',
  borderRadius: 30,
})

export const StyledAddToCart = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const StyledMainImgs = styled('div')(() => ({
  display: 'flex',
  gap: 30,
  maxWidth: 770,
  width: '100%',
  maxHeight: 559,
  height: '100%',
}))

export const StyledBigProductImgWrapper = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  height: 900,
  borderRadius: 30,
  overflow: 'hidden',
}))
