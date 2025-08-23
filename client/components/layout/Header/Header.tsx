'use client'
import { Constrained } from '@components/layout/containers'
import { HeaderWrapper, HeaderInner } from './Header.styled'
import { Typography, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useThemeMode } from '@providers/ThemeProvider'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

export const Header = () => {
  const { mode, toggle } = useThemeMode()
  return (
    <HeaderWrapper>
    <Constrained>
      <HeaderInner>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          My Shop
        </Typography>

        <div>
          <IconButton onClick={toggle} sx={{ mr: 1 }}>
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </HeaderInner>
    </Constrained>
  </HeaderWrapper>
    
  );
};
