'use client';
import { useMemo, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FilterBar, Row } from './FilterBar.styled';
import { TextField, MenuItem, Button } from '@mui/material';

function useQuerySync() {
  const router = useRouter();
  const search = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const params = useMemo(() => new URLSearchParams(search.toString()), [search]);

  function setParam(key: string, value?: string) {
    if (value && value.length) params.set(key, value);
    else params.delete(key);
    startTransition(() => {
      router.replace(`?${params.toString()}`, { scroll: false });
    });
  }

  function get(key: string) {
    return search.get(key) ?? '';
  }

  function reset() {
    startTransition(() => {
      router.replace('?', { scroll: false });
    });
  }

  return { get, setParam, reset, isPending };
}

const categories = [
  { value: 'all', label: 'All' },
  { value: 'clothes', label: 'Clothes' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'home', label: 'Home' },
];

const sorts = [
  { value: '', label: 'Sort' },
  { value: 'price-asc', label: 'Price ↑' },
  { value: 'price-desc', label: 'Price ↓' },
];

export default function Filters() {
  const { get, setParam, reset, isPending } = useQuerySync();

  return (
    <FilterBar aria-busy={isPending}>
      <Row>
        <TextField
          label="Search"
          defaultValue={get('q')}
          onChange={(e) => setParam('q', e.target.value)}
          size="small"
        />
        <TextField
          select
          label="Category"
          defaultValue={get('category') || 'all'}
          onChange={(e) => setParam('category', e.target.value)}
          size="small"
        >
          {categories.map((c) => (
            <MenuItem key={c.value} value={c.value}>
              {c.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Min price"
          type="number"
          defaultValue={get('min')}
          onChange={(e) => setParam('min', e.target.value)}
          size="small"
          inputProps={{ min: 0 }}
        />
        <TextField
          label="Max price"
          type="number"
          defaultValue={get('max')}
          onChange={(e) => setParam('max', e.target.value)}
          size="small"
          inputProps={{ min: 0 }}
        />
        <TextField
          select
          label="Sort"
          defaultValue={get('sort') || ''}
          onChange={(e) => setParam('sort', e.target.value)}
          size="small"
        >
          {sorts.map((s) => (
            <MenuItem key={s.value} value={s.value}>
              {s.label}
            </MenuItem>
          ))}
        </TextField>
        <div style={{ display: 'none' }} />
      </Row>

      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <Button variant="outlined" onClick={reset}>
          Reset
        </Button>
      </div>
    </FilterBar>
  );
}
