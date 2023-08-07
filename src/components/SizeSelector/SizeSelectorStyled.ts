import { Button, styled } from '@mui/material'

export const StyledSizes = styled('div')({
  display: 'flex',
  gap: 15,
})

interface StyledSizeProps {
  active: boolean
}

export const StyledSize = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyledSizeProps>(({ active, theme }) => ({
  ...(active && {
    outline: `1px solid ${theme.palette.primary.contrastText}`,
  }),
}))
