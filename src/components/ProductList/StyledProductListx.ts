import { styled } from '@mui/material'

export const StyledProductListGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '30px',
  [theme.breakpoints.down('laptop')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('mobile')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}))
