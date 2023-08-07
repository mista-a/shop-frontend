import { styled, Typography } from '@mui/material'
import { memo } from 'react'
import theme from '../../theme/theme'
import Link from '../UI/Link/Link'

const Logo = () => {
  const Logo = styled(Typography)({
    [theme.breakpoints.down('mobile')]: {
      fontSize: '30px',
    },
  })

  return (
    <Link href={'/'}>
      <Logo
        variant='h4'
        sx={{
          display: {
            display: 'none',
            tablet: 'block',
          },
        }}
      >
        SHOP
      </Logo>
      <Logo sx={{ display: { tablet: 'none' } }} variant='h4'>
        S
      </Logo>
    </Link>
  )
}

export default memo(Logo)
