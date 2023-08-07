import {
  FormControl,
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps,
  Radio as MuiRadio,
  RadioGroup,
  RadioProps,
  styled,
  useRadioGroup,
} from '@mui/material'
import { useRouter } from 'next/router'
import React, { ChangeEvent } from 'react'
import filter from '../../../utils/filter'

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <MuiFormControlLabel {...props} />
))(({ theme, checked }) => ({
  padding: '10px',
  width: '100%',
  transition: 'background .2s',
  justifyContent: 'flex-end',
  borderRadius: '4px',
  '&:hover': {
    background: theme.palette.secondary.light,
  },
  '&': checked && {
    background: theme.palette.secondary.light,
  },
}))

function Radio(props: RadioProps) {
  return (
    <MuiRadio
      sx={{
        display: 'none',
      }}
      disableRipple
      icon={<span />}
      checkedIcon={<span />}
      {...props}
    />
  )
}

function FormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup()

  let checked = false
  if (radioGroup) {
    checked = radioGroup.value === props.value
  }

  return <StyledFormControlLabel checked={checked} {...props} />
}

const SortBy = ({ setOpen }) => {
  const router = useRouter()

  const onSortByChange = (e: ChangeEvent<HTMLInputElement>): void => {
    filter({ router, sort: e.target.value })
    setOpen(false)
  }

  const options = [
    {
      value: 'toLessPopular',
      label: 'To Less Popular',
    },
    {
      value: 'toMostPopular',
      label: 'To Most Popular',
    },
    {
      value: 'toLessExpensive',
      label: 'To Less expensive',
    },
    {
      value: 'toMostExpensive',
      label: 'To Most Expensive',
    },
  ]

  return (
    <FormControl>
      <RadioGroup
        sx={{ textAlign: 'right' }}
        value={router.query.sort || 'toLessPopular'}
        onChange={onSortByChange}
      >
        {options.map(({ value, label }) => (
          <FormControlLabel
            key={value}
            value={value}
            label={label}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
export default SortBy
