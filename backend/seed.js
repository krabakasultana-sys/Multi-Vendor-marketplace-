import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'

import { connectDB } from './config/db.js'
import User from './models/User.js'
import Product from './models/Product.js'
import Blog from './models/Blog.js'

dotenv.config()

await connectDB()

async function seedData() {
  try {
    await User.deleteMany()
    await Product.deleteMany()
    await Blog.deleteMany()

    const hashedAdminPassword = await bcrypt.hash('admin123', 10)
    const hashedUserPassword = await bcrypt.hash('user123', 10)

    await User.create([
      {
        name: 'Admin User',
        email: 'admin@clicon.com',
        password: hashedAdminPassword,
        role: 'admin',
        isVerified: true,
      },
      {
        name: 'Normal User',
        email: 'user@clicon.com',
        password: hashedUserPassword,
        role: 'user',
        isVerified: true,
      },
    ])

    await Product.create([
      {
        name: 'Xbox Series S Console',
        price: 299,
        oldPrice: 399,
        category: 'Gaming',
        stock: 20,
        image: '/images/hero/xbox-console.png',
        description:
          'A powerful next-generation gaming console with fast loading and smooth gameplay.',
        rating: 4.8,
        reviews: 121,
        isFeatured: true,
      },
      {
        name: 'Sony Wireless Headphones',
        price: 120,
        oldPrice: 160,
        category: 'Headphones',
        stock: 35,
        image: '/images/products/sony-headphone.png',
        description:
          'Comfortable wireless headphones with clear sound and long battery life.',
        rating: 4.6,
        reviews: 89,
        isFeatured: true,
      },
      {
        name: 'Samsung Galaxy Smartphone',
        price: 699,
        oldPrice: 799,
        category: 'Smartphone',
        stock: 15,
        image: '/images/products/samsung-phone.png',
        description:
          'Modern smartphone with fast performance, bright display, and strong camera.',
        rating: 4.7,
        reviews: 210,
        isFeatured: true,
      },
      {
        name: 'Apple MacBook Pro',
        price: 1699,
        oldPrice: 1999,
        category: 'Laptop',
        stock: 8,
        image: '/images/product-detail/macbook-main.png',
        description:
          'Professional laptop with powerful performance for study, work, and creative tasks.',
        rating: 4.9,
        reviews: 341,
        isFeatured: true,
      },
      {
        name: 'Professional Camera Drone',
        price: 2300,
        oldPrice: 2500,
        category: 'Drone',
        stock: 12,
        image: '/images/products/drone-white.png',
        description:
          'High quality drone for aerial photography, video recording, and outdoor projects.',
        rating: 4.5,
        reviews: 64,
        isFeatured: false,
      },
      {
        name: 'Smart Indoor Security Camera',
        price: 250,
        oldPrice: 310,
        category: 'Camera',
        stock: 30,
        image: '/images/products/security-camera.png',
        description:
          'Smart security camera for home and office monitoring with clear video quality.',
        rating: 4.4,
        reviews: 78,
        isFeatured: false,
      },
    ])

    await Blog.create([
      {
        title: 'How to choose the right electronic device for your daily needs',
        author: 'Kristin Watson',
        category: 'Electronics',
        image: '/images/news/news-1.png',
        shortDescription:
          'Learn simple buying tips that help you compare features, prices, warranty, and product quality before you purchase.',
        content:
          'Technology has become part of our daily routine. From smartphones and laptops to headphones and smart home devices, electronics help people work faster, communicate better, and enjoy entertainment more easily. Before buying a device, customers should compare features, warranty, price, and long-term usability.',
      },
      {
        title: 'Smart accessories that can improve your work setup',
        author: 'Robert Fox',
        category: 'Accessories',
        image: '/images/news/news-2.png',
        shortDescription:
          'A good keyboard, mouse, monitor, and headset can make your workspace more comfortable and more productive.',
        content:
          'A productive work setup depends on comfort and reliability. Smart accessories such as keyboards, mice, headphones, and monitors can improve focus and reduce physical strain during long work sessions.',
      },
      {
        title: 'Simple ways to keep your gadgets safe for longer use',
        author: 'Arlene McCoy',
        category: 'Gadgets',
        image: '/images/news/news-3.png',
        shortDescription:
          'Protect your devices from dust, heat, moisture, and unsafe charging habits to improve their performance and lifespan.',
        content:
          'Electronic gadgets last longer when they are used carefully. Keep devices clean, avoid overheating, use original chargers, and protect them from water or dust. Good habits can improve device performance and reduce repair costs.',
      },
    ])

    console.log('Database seeded successfully')
    console.log('Admin login: admin@clicon.com / admin123')
    console.log('User login: user@clicon.com / user123')

    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seedData()