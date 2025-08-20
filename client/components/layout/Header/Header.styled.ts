import { styled } from '@mui/material/styles';
import { Theme } from '@emotion/react';

export const HeaderWrapper = styled('header')(({ theme }: { theme: Theme }) => ({
  width: '100%',
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}))


export const HeaderInner = styled('div')(({ theme }: { theme: Theme }) => ({
  minHeight: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
}))