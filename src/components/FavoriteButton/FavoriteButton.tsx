import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Api } from '../../api/api'
import {
  StyledFavoriteBorderIcon,
  StyledFavoriteIcon,
} from './StyledFavoriteButton'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectUserData } from '../../redux/slices/user'
import { toggleAuthDialog } from '../../redux/slices/authDialog'

interface FavoriteButtonProps {
  productId: number
  initialInFavorite: boolean
  className?: string
}

const FavoriteButton = ({
  initialInFavorite,
  productId,
  className,
}: FavoriteButtonProps) => {
  const [inFavorite, setInFavorite] = useState(initialInFavorite)

  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUserData)

  const productInFavorite = user.id && inFavorite

  useEffect(() => {
    const checkInFavorite = async (productId: number) => {
      const inFavorite = await Api().product.checkInFavorite(productId)
      setInFavorite(inFavorite)
    }

    if (user.id) checkInFavorite(productId)
  }, [user, productId])

  const toggleInFavorite = () => {
    if (user.id) {
      try {
        Api().user.toggleFavorite(productId)
      } catch (error) {
        console.warn(error)
      }

      setInFavorite((inFavorite) => !inFavorite)
    } else {
      dispatch(toggleAuthDialog())
    }
  }

  return (
    <Button
      size='small'
      variant='text'
      disableRipple={false}
      onClick={toggleInFavorite}
      className={className}
    >
      {productInFavorite ? (
        <StyledFavoriteIcon />
      ) : (
        <StyledFavoriteBorderIcon />
      )}
    </Button>
  )
}

export default React.memo(FavoriteButton)
