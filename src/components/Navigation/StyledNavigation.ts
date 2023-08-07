import { Typography, styled } from '@mui/material'

export const StyledNavigation = styled('nav')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  [theme.breakpoints.down('laptop')]: {
    display: 'none',
  },
}))

export const StyledTooltipTitles = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 150px)',
  gap: 20,
})

export const StyledSubcategoryName = styled(Typography)({
  wordBreak: 'break-word',
  textTransform: 'capitalize',
})

export const StyledCategoryTypography = styled(Typography)({
  cursor: 'pointer',
})
