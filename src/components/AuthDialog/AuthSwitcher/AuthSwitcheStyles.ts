import { Typography, styled } from '@mui/material'

export const AuthSwitcherTexts = styled(Typography)(({ theme }) => ({
  columnGap: '15px',
  marginRight: '-5px',
}))

export const StyledAuthSwitcheText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  zIndex: 1,
}))
