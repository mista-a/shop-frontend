import { Check } from '@mui/icons-material'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel as MuiFormControlLabel,
  FormGroup,
  styled,
} from '@mui/material'
import { useRouter } from 'next/router'
import { ChangeEvent, FC, SyntheticEvent, useEffect, useState } from 'react'
import theme from '../../theme/theme'
import filter from '../../utils/filter'
import { IColor } from '../../types/Color'

const ColorIcon = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 26,
  height: 26,
  borderRadius: 10,
})

const FormControlLabel = styled(MuiFormControlLabel)({
  border: '1px solid black',
  borderRadius: 5,
  transition: 'background-color .2s',
  marginLeft: 0,
  marginRight: 0,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
    cursor: 'pointer',
  },
})

interface ColorFilterProps {
  colors: IColor[]
  setOpen: (open: boolean) => void
}

const ColorFilter: FC<ColorFilterProps> = ({ colors, setOpen }) => {
  const router = useRouter()
  const [activeColors, setActiveColors] = useState<string[]>([])

  useEffect(() => {
    if (Array.isArray(router.query.colors)) {
      setActiveColors(router.query.colors)
    } else {
      setActiveColors(router.query.colors ? [router.query.colors] : [])
    }
  }, [router.query.colors])

  const handleColor = (event) => {
    if (event.target.checked) {
      setActiveColors([...activeColors, event.target.value])
    } else {
      activeColors.splice(activeColors.indexOf(event.target.value), 1)
      setActiveColors([...activeColors])
    }
  }

  const submit = () => {
    filter({ router, colors: activeColors })
    setOpen(false)
  }

  const checked = (value: string): boolean => {
    return activeColors?.includes(value)
  }

  return (
    <FormGroup sx={{ flexDirection: 'column', gap: '15px' }}>
      {colors.map(({ name, rgb }) => (
        <FormControlLabel
          key={name}
          label={name}
          onChange={handleColor}
          control={
            <Checkbox
              checked={checked(name)}
              value={name}
              checkedIcon={
                <ColorIcon sx={{ background: rgb }}>
                  <Check
                    sx={{
                      color: theme.palette.getContrastText(rgb),
                      width: 22,
                    }}
                  />
                </ColorIcon>
              }
              icon={<ColorIcon sx={{ background: rgb }} />}
            />
          }
        />
      ))}
      <Button color='success' type='submit' onClick={submit}>
        Apply
      </Button>
    </FormGroup>
  )
}
export default ColorFilter
