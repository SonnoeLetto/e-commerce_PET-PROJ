import Image from 'next/image';
import { CardContent, Typography } from '@mui/material';
import { ProductCardRoot, ImageWrap, PriceRow } from './ ProductCard.styled';
// import AddToCartButton from '@components/cart/AddToCartButton'

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <ProductCardRoot>
      <ImageWrap>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 600px) 100vw, 25vw"
          style={{ objectFit: 'cover' }}
        />
      </ImageWrap>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={700}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <PriceRow>
          <Typography variant="subtitle1">${product.price.toFixed(2)}</Typography>
          {/* <AddToCartButton productId={product.id} /> */}
        </PriceRow>
      </CardContent>
    </ProductCardRoot>
  );
}
