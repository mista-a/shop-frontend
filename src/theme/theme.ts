import { createTheme } from '@mui/material'
import { createTypography } from './createTypography'
import { createComponents } from './createComponents'
import { createBreakpoints } from './createBreakpoints'
import { createPalette } from './createPalette'

const palette = createPalette()
const typography = createTypography()
const breakpoints = createBreakpoints()
const components = createComponents(palette)

const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  palette,
  breakpoints,
  typography,
  components,
})

export default theme
