import { common } from '@mui/material/colors'
import {
  Palette,
  PaletteOptions,
  SimplePaletteColorOptions,
  alpha,
} from '@mui/material/styles'
import { error, primary, info, neutral, success, warning, pink } from './colors'

export interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions
  info?: SimplePaletteColorOptions
}

export function createPalette(): DefaultPaletteOptions {
  return {
    action: {
      active: neutral[500],
    },
    // action: {
    //   active: neutral[500],
    //   disabled: alpha(neutral[900], 0.38),
    //   disabledBackground: alpha(neutral[900], 0.12),
    //   focus: alpha(neutral[900], 0.16),
    //   hover: alpha(neutral[900], 0.04),
    //   selected: alpha(neutral[900], 0.12),
    // },
    background: {
      default: common.white,
      paper: common.white,
    },
    divider: '#F2F4F7',
    error,
    info,
    mode: 'light' as 'light' | 'dark',
    primary,
    success,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38),
    },
    warning,
    pink,
  }
}
