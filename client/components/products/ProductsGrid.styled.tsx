'use client'
import { styled } from '@mui/material/styles'
import Grid, { GridProps } from '@mui/material/Grid'

export const GridContainer = styled(Grid)<GridProps>(({ theme }) => ({
  marginTop: theme.spacing(2),
}))