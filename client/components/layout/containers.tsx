'use client';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';

export const AppShell = styled('div')(({ theme }) => ({
  minHeight: '100dvh',
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: 'flex',
  flexDirection: 'column',
}));

export const Constrained = styled(Container)(({ theme }) => ({
  maxWidth: 1200,
  paddingLeft: 16,
  paddingRight: 16,
  [theme.breakpoints.up('md')]: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 32,
    paddingRight: 32,
  },
}));

/** Контентная часть (растягивается между Header и Footer) */
export const Main = styled('main')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});
