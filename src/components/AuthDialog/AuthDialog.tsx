import { Dialog, DialogContent } from '@mui/material'
import { useState } from 'react'
import AuthSwitcher from './AuthSwitcher/AuthSwitcher'
import Login from './mods/Login'
import Registration from './mods/Registration'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  selectAuthDialog,
  toggleAuthDialog,
} from '../../redux/slices/authDialog'
import { CreateUserDto, LoginDto } from '../../api/types'
import { setCookie } from 'nookies'
import { setUserData } from '../../redux/slices/user'
import { StyledAuth } from './AuthDialogStyles'

const AuthDialog: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const { isOpen, buttonState } = useAppSelector(selectAuthDialog)

  const dispatch = useAppDispatch()
  const closeAuthDialog = () => dispatch(toggleAuthDialog())

  const onSubmit = async (values: LoginDto | CreateUserDto, request) => {
    try {
      const data = await request()
      setCookie(null, 'shopToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      dispatch(setUserData(data))
      closeAuthDialog()
    } catch (err) {
      const response = err.response
      if (response) {
        setErrorMessage(response.data.message)
      }
    }
  }

  return (
    <Dialog open={isOpen} onClose={closeAuthDialog}>
      <DialogContent>
        <StyledAuth>
          <AuthSwitcher />
          {buttonState === 'Sign up' ? (
            <Registration onSubmit={onSubmit} errorMessage={errorMessage} />
          ) : (
            <Login onSubmit={onSubmit} errorMessage={errorMessage} />
          )}
        </StyledAuth>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
