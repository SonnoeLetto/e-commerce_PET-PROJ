import mongoose from 'mongoose';
import { Product } from './types/product';

const { Schema } = mongoose;

const productSchema = new Schema<Product>({
  title: { type: String, required: true, trim: true, minLength: 2, maxLength: 120 },
  price: {
    type: Number,
    required: true,
    min: 0,
    set: (value: number) => Math.round(value * 100),
  },
  photo: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value: string) => {
        try {
          new URL(value);
          return true;
        } catch {
          return false;
        }
      },
      message: 'Invalid URL format for photo',
    },
  },
  categories: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Category',
    required: true,
    validate: {
      validator: (arr: mongoose.Types.ObjectId[]) => Array.isArray(arr) && arr.length > 0,
      message: 'Product must have at least one category',
    },
  },
  description: { type: String, trim: true, maxLength: 2000 },
  isNew: { type: Boolean, default: false },
  isSale: { type: Boolean, default: false },
  isInStock: { type: Boolean, default: true },
  rating: { type: Number, max: 100, min: 0 },
});

productSchema.index({ title: 1 });
productSchema.index({ price: 1 });
productSchema.index({ isInStock: 1, isSale: 1 });
productSchema.index({ categories: 1 });

export const ProductModel = mongoose.model<Product>('Product', productSchema)