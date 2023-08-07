import { styled, Drawer } from '@mui/material'

export const StyledNavigationMenuDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up('laptop')]: {
    display: 'none',
  },
}))

export const StyledNavigationMenuDrawerInner = styled('div')({
  width: 250,
})
