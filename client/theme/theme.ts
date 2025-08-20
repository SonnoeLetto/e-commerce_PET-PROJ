'use client'
import { createTheme } from '@mui/material/styles';

const colors = {
  darkBg: '#232946',
  lightBg: '#d4d8f0',
  card: '#fffffe',
  textLight: '#fffffe',
  textDark: '#232946',
  mutedDark: '#b8c1ec',
  mutedLight: '#4b4f6b',
  primary: '#eebbc3',
  stroke: '#121629',
  accent: '#d4939d',
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colors.darkBg,
      paper: colors.card,
    },
    text: {
      primary: colors.textLight,
      secondary: colors.mutedDark,
    },
    primary: {
      main: colors.primary,
      contrastText: colors.textDark,
    },
    secondary: {
      main: colors.accent,
      contrastText: colors.textDark,
    },
    divider: colors.stroke,
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 6px 24px rgba(0,0,0,.12)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '8px 20px',
          fontWeight: 600,
          textTransform: 'none',
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: colors.lightBg,
      paper: colors.card,
    },
    text: {
      primary: colors.textDark,
      secondary: colors.mutedLight,
    },
    primary: {
      main: colors.primary,
      contrastText: colors.textDark,
    },
    secondary: {
      main: colors.accent,
      contrastText: colors.textDark,
    },
    divider: colors.stroke,
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 6px 24px rgba(0,0,0,.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '8px 20px',
          fontWeight: 600,
          textTransform: 'none',
        },
      },
    },
  },
});