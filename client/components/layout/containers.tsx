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
  margin: '0 auto',
}));

export const Main = styled('main')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0',
});
