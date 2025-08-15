import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import productsRouter from './routes/products.routes';

import './models/category.model';
import './models/product.model';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.get('/', (req, res) => {
    res.json({status: 'ok'});
})

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/shop';

async function start() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('✅ MongoDB connected');

        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        })
    } catch(err) {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    }
}
start();