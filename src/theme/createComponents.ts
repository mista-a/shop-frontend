import { Components } from '@mui/material'
import { DefaultPaletteOptions } from './createPalette'

export function createComponents(palette: DefaultPaletteOptions): Components {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'none',
          boxShadow: 'none',
          padding: '8px 0',
          marginBottom: 30,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained',
      },
      styleOverrides: {
        sizeSmall: {
          padding: 0,
        },
        sizeMedium: {
          padding: '8px 20px',
        },
        sizeLarge: {
          padding: '11px 24px',
        },
        root: ({ ownerState }) => ({
          padding: 0,
          textTransform: 'none',
          borderRadius: '15px',
          ':active': {
            transform: 'scale(0.96)',
          },
          ...(ownerState.variant === 'text' && {
            minWidth: 'auto',
          }),
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
        },
        maxWidthLg: {
          maxWidth: '1550px!important',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        maxWidth: 'desktop',
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.primary.main,
        },
        arrow: {
          color: palette.primary.main,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: palette.primary.contrastText,
        },
      },
    },
  }
}
