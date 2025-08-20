'use client'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { darkTheme, lightTheme } from '../theme/theme'

type Mode = 'light' | 'dark'
type Ctx = { mode: Mode; toggle: () => void }

const ThemeModeContext = createContext<Ctx | null>(null)

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('light')

  useEffect(() => {
    const saved = (localStorage.getItem('mode') as Mode | null)
    if (saved) {
      setMode(saved)
    } else {
      // const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
      // setMode(prefersDark ? 'dark' : 'light')
    }
  }, [])

  const toggle = useCallback(() => {
    setMode(prev => {
      const next: Mode = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('mode', next)
      return next
    })
  }, [])

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode])
  const ctx = useMemo(() => ({ mode, toggle }), [mode, toggle])

  return (
    <ThemeModeContext.Provider value={ctx}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext)
  if (!ctx) throw new Error('useThemeMode must be used within AppThemeProvider')
  return ctx
}
