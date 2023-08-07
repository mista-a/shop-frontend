import { Box } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {
  selectAuthDialog,
  setButtonState,
} from '../../../redux/slices/authDialog'
import FlexBox from '../../UI/FlexBox'
import Label from '../../UI/Label'
import { StyledAuthSwitcheText } from './AuthSwitcheStyles'

const AuthSwitecher: React.FC = () => {
  const dispatch = useAppDispatch()

  const { buttonState } = useAppSelector(selectAuthDialog)

  const toggleButtonState = () => {
    buttonState === 'Sign in'
      ? dispatch(setButtonState('Sign up'))
      : dispatch(setButtonState('Sign in'))
  }

  return (
    <FlexBox sx={{ flexDirection: 'rowReverse' }}>
      <Label sx={{ width: '180px', display: 'inlineBlock' }}>
        <FlexBox
          sx={{
            background: '#FFA568',
            borderRadius: '20px',
            padding: '15px',
            position: 'relative',
            cursor: 'pointer',
            maxWidth: '180px',
          }}
        >
          <FlexBox sx={{ columnGap: '15px', mr: '-5px' }}>
            <StyledAuthSwitcheText>Sign in</StyledAuthSwitcheText>
            <StyledAuthSwitcheText>Sign up</StyledAuthSwitcheText>
          </FlexBox>
          <Box
            sx={{
              width: '45%',
              height: '80%',
              background: '#FF7C23',
              borderRadius: '20px',
              position: 'absolute',
              left: '5px',
              top: '5px',
              transition: '.5s',
              ...(buttonState === 'Sign up' && {
                transform: 'translateX(100%)',
                left: '7px',
              }),
            }}
          />
          <input
            style={{ width: 0, height: 0 }}
            type='checkbox'
            onChange={toggleButtonState}
            checked={buttonState === 'Sign up'}
          />
        </FlexBox>
      </Label>
    </FlexBox>
  )
}

export default AuthSwitecher
