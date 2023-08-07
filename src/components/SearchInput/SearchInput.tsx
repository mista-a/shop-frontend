import React, { FormEvent, memo, useRef } from 'react'
import { Button, TextField, styled } from '@mui/material'
import { useRouter } from 'next/router'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import theme from '../../theme/theme'
import CloseIcon from '@mui/icons-material/Close'

const HeaderButton = styled(Button)({
  [theme.breakpoints.down('mobile')]: {
    minHeight: '40px',
    minWidth: '40px',
    backgroundColor: 'transparent',
  },
})

const SearchToggler = styled(HeaderButton)({
  display: 'none',
  [theme.breakpoints.down(720)]: {
    display: 'inline-flex',
  },
})

const SearchInput = ({ switchShowFullSearch, showFullSearch }) => {
  const SearchForm = styled('form')({
    [!showFullSearch && theme.breakpoints.down(720)]: {
      display: 'none',
    },
  })

  const router = useRouter()
  const searchQueryRef = useRef<HTMLInputElement>()

  const handleSearchText = (e: FormEvent<HTMLFormElement>) => {
    if (searchQueryRef.current.value) {
      router.push(`/search?name=${searchQueryRef.current.value}`)
    }
    e.preventDefault()
  }

  return (
    <>
      <SearchForm onSubmit={handleSearchText}>
        <TextField
          variant='standard'
          defaultValue={router.query.name}
          inputRef={searchQueryRef}
          placeholder='Search'
          sx={{
            borderRadius: '15px',
            background: 'white',
            padding: '0 10px',
          }}
          InputProps={{
            disableUnderline: true,
            startAdornment: showFullSearch && (
              <Button
                variant='text'
                size='small'
                onClick={switchShowFullSearch}
              >
                <CloseIcon fontSize='small' />
              </Button>
            ),
            endAdornment: (
              <Button variant='text' size='small' type='submit'>
                <SearchRoundedIcon fontSize='small' />
              </Button>
            ),
          }}
        />
      </SearchForm>
      {!showFullSearch && (
        <SearchToggler size='small' onClick={switchShowFullSearch}>
          <SearchRoundedIcon />
        </SearchToggler>
      )}
    </>
  )
}

export default memo(SearchInput)
