import { styled } from '@mui/material'
import Img from '../../../components/Img/Img'

export const StyledCarouselContainer = styled('div')(() => ({
  height: 700,
  maxWidth: 1550,
  overflowX: 'hidden',
  display: 'flex',
  cursor: 'pointer',
  borderRadius: 15,
}))

export const StyledCarouselText = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  bottom: 100,
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
}))

export const StyledCarouselImg = styled(Img)(() => ({
  borderRadius: 30,
}))
