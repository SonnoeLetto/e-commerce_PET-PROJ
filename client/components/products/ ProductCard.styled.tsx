'use client';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const ProductCardRoot = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  border: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
  overflow: 'hidden',
}));

export const ImageWrap = styled('div')({
  position: 'relative',
  width: '100%',
  height: 180,
});

export const PriceRow = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
