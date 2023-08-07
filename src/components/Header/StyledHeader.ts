import { Button, Container, Typography, styled } from '@mui/material'

export const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
})

export const StyledHeaderBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 30,
  [theme.breakpoints.down('tablet')]: {
    gap: 10,
  },
}))

export const StyledHeaderButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('mobile')]: {
    backgroundColor: theme.palette.primary.dark,
    padding: 0,
    minWidth: 'fit-content',
    boxShadow: 'none',
  },
}))

export const StyledBurger = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('laptop')]: {
    display: 'none',
  },
}))
