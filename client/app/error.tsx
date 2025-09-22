'use client';
import { Typography, Button } from '@mui/material';
import { Constrained, Main } from '@components/layout/containers';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <Main>
      <Constrained>
        <Typography variant="h3" gutterBottom>
          Something went wrong
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please try again.
        </Typography>
        <Button onClick={() => reset()} variant="contained">
          Retry
        </Button>
      </Constrained>
    </Main>
  );
}
