import { Typography, Button } from '@mui/material'
import Link from 'next/link'
import { Constrained, Main } from '@components/layout/containers'

export default function NotFound() {
  return (
    <Main>
      <Constrained>
        <Typography variant="h3" gutterBottom>
          404 – Page not found
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Button component={Link} href="/" variant="contained">
          Go home
        </Button>
      </Constrained>
    </Main>
  )
}