import mongoose from 'mongoose';
import { Category } from './types/product';

const categorySchema = new mongoose.Schema<Category>(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 60, unique: true },
  },
  { timestamps: true },
);

categorySchema.index({ name: 1 }, { unique: true });

export const CategoryModel = mongoose.model<Category>('Category', categorySchema);
