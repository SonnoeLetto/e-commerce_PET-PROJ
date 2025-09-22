import { Skeleton } from '@mui/material';
import { Constrained, Main } from '@components/layout/containers';

export default function Loading() {
  return (
    <Main>
      <Constrained>
        <Skeleton variant="text" width={300} height={40} />
        <Skeleton variant="rectangular" width="100%" height={200} sx={{ mt: 2 }} />
      </Constrained>
    </Main>
  );
}
