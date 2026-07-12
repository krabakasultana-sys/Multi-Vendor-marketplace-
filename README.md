# Clicon eCommerce Dashboard

Full-stack eCommerce dashboard application with separate frontend and backend.

## Tech Stack

**Frontend:**
- React
- Tailwind CSS
- Vite

**Backend:**
- Node.js
- Express
- MongoDB (Atlas)
- JWT Authentication

## Project Structure

├── frontend/    # React application
└── backend/     # Node.js/Express API

## Getting Started

### Backend Setup

cd backend
npm install
npm start

### Frontend Setup

cd frontend
npm install
npm run dev

## Environment Variables

Create a `.env` file inside the `backend/` folder with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

## Features

- User authentication (JWT)
- Product dashboard
- Order history & details
- Payment cards & address management
- Browsing history
- Account settings