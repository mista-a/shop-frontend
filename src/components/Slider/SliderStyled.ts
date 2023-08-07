import { Button, styled } from '@mui/material'

export const StyledSlider = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  gap: 20,
  cursor: 'pointer',
})

export const StyledMiniSlides = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  // overflowY: 'auto',
})

interface StyledMiniSlideButtonProps {
  active: boolean
}

export const StyledMiniSlideButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyledMiniSlideButtonProps>(({ active, theme }) => ({
  width: 70,
  height: 90,
  borderRadius: 6,
  overflow: 'hidden',
  position: 'relative',
  ...(active && {
    outline: `1px solid ${theme.palette.primary.contrastText}`,
  }),
}))

export const StyledSlide = styled('div')({
  width: '100%',
  height: '100%',
  borderRadius: 12,
  overflow: 'hidden',
  position: 'relative',
})
