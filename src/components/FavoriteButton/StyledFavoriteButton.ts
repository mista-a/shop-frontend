import { styled } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const StyledFavoriteIcon = styled(FavoriteIcon)(({ theme }) => ({
  color: theme.palette.pink.main,
}))

export const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)(
  ({ theme }) => ({
    color: theme.palette.pink.main,
  })
)
