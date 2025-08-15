// src/seeds/seed.ts
import 'dotenv/config';
import mongoose from 'mongoose';
import { CategoryModel } from '../models/category.model';
import { ProductModel } from '../models/product.model';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/shop';

async function upsertCategories() {
  const base = [
    { name: 'Electronics' },
    { name: 'Fashion' },
    { name: 'Furniture' },
    { name: 'Sports' },
  ];

  const docs = [];
  for (const c of base) {
    const doc = await CategoryModel.findOneAndUpdate(
      { name: c.name }, // поиск по имени
      { $setOnInsert: c }, // вставляем, если нет
      { upsert: true, new: true },
    ).lean();
    docs.push(doc);
  }
  return docs;
}

async function seedProducts(categories: any[]) {
  const count = await ProductModel.countDocuments();
  if (count > 0) {
    console.log(`Products already exist: ${count}. Skip seeding.`);
    return;
  }

  const byName = (name: string) => categories.find((c: any) => c.name === name)?._id;

  const data = [
    {
      title: 'Ultra HD Monitor',
      price: 400, // сеттер в схеме переведёт в центы
      photo: 'https://picsum.photos/640/480?1',
      categories: [byName('Electronics')],
      isInStock: true,
      isNew: true,
      isSale: true,
      rating: 95,
      description: '4K monitor with vivid colors.',
    },
    {
      title: 'Comfy Running Shoes',
      price: 110,
      photo: 'https://picsum.photos/640/480?2',
      categories: [byName('Fashion'), byName('Sports')],
      isInStock: true,
      isNew: false,
      isSale: false,
      rating: 84,
      description: 'Lightweight running shoes.',
    },
    {
      title: 'Modern Leather Sofa',
      price: 1200,
      photo: 'https://picsum.photos/640/480?3',
      categories: [byName('Furniture')],
      isInStock: false,
      isNew: false,
      isSale: true,
      rating: 89,
      description: 'Luxurious leather sofa.',
    },
  ].map((p) => ({
    ...p,
    categories: p.categories.filter(Boolean), // на случай, если категория не найдена
  }));

  await ProductModel.insertMany(data);
  console.log(`Seeded ${data.length} products.`);
}

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log('✅ Mongo connected');

  const categories = await upsertCategories();
  await seedProducts(categories);

  await mongoose.disconnect();
  console.log('✅ Seeding completed');
}

main().catch(async (e) => {
  console.error(e);
  await mongoose.disconnect();
  process.exit(1);
});
