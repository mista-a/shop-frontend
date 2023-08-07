import { BreakpointOverrides, BreakpointsOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    // xs: false
    // sm: false
    // md: false
    // lg: false
    // xl: false
    mobile: true
    tablet: true
    laptop: true
    desktop: true
  }
}

export const createBreakpoints = (): BreakpointsOptions => {
  return {
    values: {
      mobile: 429,
      tablet: 769,
      laptop: 1025,
      desktop: 1921,
      lg: 0,
      md: 0,
      sm: 0,
      xl: 0,
      xs: 0,
    },
  }
}
