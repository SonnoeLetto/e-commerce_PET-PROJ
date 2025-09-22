'use client';
import { styled } from '@mui/material/styles';
import { Theme } from '@emotion/react';

export const FooterWrapper = styled('footer')(({ theme }: { theme: Theme }) => ({
  width: '100%',
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper, // чуть светлее, чем page bg
  color: theme.palette.text.secondary,
}));

export const FooterInner = styled('div')(({ theme }: { theme: Theme }) => ({
  minHeight: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
  },
}));

export const FooterLinks = styled('nav')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  a: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
}));
