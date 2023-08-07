import styled from '@emotion/styled'
import { TextField } from '@mui/material'

const BackgroundTextField = styled(TextField)({
  height: 'auto',
  '.MuiFilledInput-root': {
    backgroundColor: '#EAEDEF',
    borderRadius: 13,
    overflow: 'hidden',
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: '#606060',
  },
  '.MuiFilledInput-root.Mui-focused': {
    backgroundColor: '#EAEDEF',
  },
  '.MuiFilledInput-root:hover': {
    backgroundColor: '#EAEDEF',
  },
  '.MuiFilledInput-underline': {},
  '.MuiFilledInput-underline:before': {
    borderBottom: 'none',
  },
  '&& .MuiFilledInput-underline:hover:before': {
    borderBottom: 'none',
  },
  '.MuiFilledInput-underline:after': {
    borderBottom: 'none',
  },
  '.MuiFilledInput-underline:': {
    borderBottom: 'none',
  },
})

export default BackgroundTextField
