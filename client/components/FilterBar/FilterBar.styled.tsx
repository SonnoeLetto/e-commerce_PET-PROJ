'use client';
import { styled } from '@mui/material/styles';

export const FilterBar = styled('section')(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
  borderRadius: 16,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const Row = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr auto',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',
  },
}));
