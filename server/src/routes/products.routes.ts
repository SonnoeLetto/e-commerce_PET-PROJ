import express from 'express';
import { ProductModel } from '../models/product.model';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const product = await ProductModel.find().populate('categories', 'name');
    res.json(product);
  } catch (err) {
    console.error('GET /products error:', err);
    res.status(500).json({ message: 'Error fetching products', err });
  }
});

export default router;
