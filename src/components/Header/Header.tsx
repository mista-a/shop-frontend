import React, { useState } from 'react'
import { ReactComponent as MenuIcon } from '../../../public/icons/menu-icon.svg'
import { ReactComponent as UserIcon } from '../../../public/icons/user-icon.svg'
import Link from '../UI/Link/Link'
import AuthDialog from '../AuthDialog/AuthDialog'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { selectUserData, setDefaultUserData } from '../../redux/slices/user'
import { destroyCookie } from 'nookies'
import { toggleAuthDialog } from '../../redux/slices/authDialog'
import SearchInput from '../SearchInput/SearchInput'
import Logo from '../Logo/Logo'
import NavigationMenu from '../NavigationMenu/NavigationMenu/NavigationMenu'
import { FavoriteBorder } from '@mui/icons-material'
import LogoutIcon from '@mui/icons-material/Logout'
import Navigation from '../Navigation/Navigation'
import {
  StyledHeaderButton,
  StyledBurger,
  StyledHeaderBlock,
  StyledContainer,
} from './StyledHeader'
import { AppBar } from '@mui/material'
import Cart from '../Cart/Cart'

const Header = () => {
  const [showFullSearch, setShowFullSearch] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const user = useAppSelector(selectUserData)

  const dispatch = useAppDispatch()

  const switchShowFullSearch = () => {
    setShowFullSearch((showFullSearch) => !showFullSearch)
  }

  const openAuthDialog = () => {
    if (!user.id) dispatch(toggleAuthDialog())
  }

  const onMenuClose = () => setOpenMenu(false)
  const toggleMenu = () => setOpenMenu(!openMenu)

  const logout = () => {
    try {
      destroyCookie({}, 'shopToken', { path: '/' })
      dispatch(setDefaultUserData())
    } catch (err) {
      console.warn('Logout error: ', err)
    }
  }

  return (
    <AppBar position='sticky'>
      <StyledContainer>
        <NavigationMenu onMenuClose={onMenuClose} openMenu={openMenu} />
        {!showFullSearch && (
          <StyledHeaderBlock>
            <Logo />
            <Navigation />
            <StyledBurger onClick={toggleMenu}>
              <MenuIcon />
            </StyledBurger>
          </StyledHeaderBlock>
        )}
        <StyledHeaderBlock>
          <SearchInput
            showFullSearch={showFullSearch}
            switchShowFullSearch={switchShowFullSearch}
          />
          {!showFullSearch && (
            <>
              {user.id ? (
                <StyledHeaderButton onClick={logout}>
                  <LogoutIcon />
                </StyledHeaderButton>
              ) : (
                <StyledHeaderButton onClick={openAuthDialog}>
                  <UserIcon />
                </StyledHeaderButton>
              )}
              <Link href='/favorite'>
                <StyledHeaderButton onClick={openAuthDialog}>
                  <FavoriteBorder fontSize='small' />
                </StyledHeaderButton>
              </Link>
            </>
          )}
          <Cart />
        </StyledHeaderBlock>
        <AuthDialog />
      </StyledContainer>
    </AppBar>
  )
}

export default React.memo(Header)
