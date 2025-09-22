import { Constrained, Main } from '@components/layout/containers';
import Filters from '@components/FilterBar/FilterBar';
import ProductsList from '@components/products/ProductsList';

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  return (
    <>
      <Filters />
      {/* SERVER component: получает searchParams и сам ходит на бэкенд */}
      <ProductsList searchParams={searchParams} />
    </>
  );
}
