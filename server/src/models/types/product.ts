export interface Product {
    title: string,
    price: number,
    photo: string,
    categories: Category,
    description?: string,
    isNew?: boolean,
    isSale?: boolean,
    isInStock?: boolean,
    rating: number
}

export type Category = {
  createdAt: Date;
  updatedAt?: Date;
  name: string;
};