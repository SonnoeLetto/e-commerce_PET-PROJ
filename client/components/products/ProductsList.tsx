import { Typography, Grid } from '@mui/material';
import { GridContainer } from './ProductsGrid.styled';
import { ProductCard } from './ProductCard';
import { fetchProducts } from '@lib/api/products';

type SearchParams = { [k: string]: string | string[] | undefined };

function buildQuery(params: SearchParams) {
  const qs = new URLSearchParams();
  if (typeof params.q === 'string') qs.set('q', params.q);
  if (typeof params.category === 'string') qs.set('category', params.category);
  if (typeof params.min === 'string') qs.set('min', params.min);
  if (typeof params.max === 'string') qs.set('max', params.max);
  if (typeof params.sort === 'string') qs.set('sort', params.sort);
  return qs;
}

export default async function ProductsList({ searchParams }: { searchParams: SearchParams }) {
  const qs = buildQuery(searchParams);
  const products = await fetchProducts({ search: qs, revalidate: 30 });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <GridContainer container spacing={2}>
        {products.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </GridContainer>
    </>
  );
}
