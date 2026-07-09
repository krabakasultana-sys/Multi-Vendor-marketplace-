# Clicon Backend API

## Setup

1. Install dependencies:
```
npm install
```

2. `.env` file এ MongoDB URI দাও:
```
MONGO_URI=mongodb://localhost:27017/clicon
JWT_SECRET=clicon_jwt_secret_key_2024
PORT=5000
```

3. Run:
```
npm run dev     # development
npm start       # production
```

## API Endpoints

### Users
| Method | URL | Access |
|--------|-----|--------|
| POST | /api/users/register | Public |
| POST | /api/users/login | Public |
| GET | /api/users/profile | Private |
| PUT | /api/users/profile | Private |
| GET | /api/users | Admin |
| DELETE | /api/users/:id | Admin |

### Products
| Method | URL | Access |
|--------|-----|--------|
| GET | /api/products | Public |
| GET | /api/products/:id | Public |
| POST | /api/products | Admin |
| PUT | /api/products/:id | Admin |
| DELETE | /api/products/:id | Admin |
| POST | /api/products/:id/reviews | Private |

### Categories
| Method | URL | Access |
|--------|-----|--------|
| GET | /api/categories | Public |
| POST | /api/categories | Admin |
| PUT | /api/categories/:id | Admin |
| DELETE | /api/categories/:id | Admin |

### Cart
| Method | URL | Access |
|--------|-----|--------|
| GET | /api/cart | Private |
| POST | /api/cart | Private |
| PUT | /api/cart/:productId | Private |
| DELETE | /api/cart/:productId | Private |
| DELETE | /api/cart | Private |

### Orders
| Method | URL | Access |
|--------|-----|--------|
| POST | /api/orders | Private |
| GET | /api/orders/myorders | Private |
| GET | /api/orders/:id | Private |
| PUT | /api/orders/:id/status | Admin |
| PUT | /api/orders/:id/cancel | Private |
| GET | /api/orders | Admin |
