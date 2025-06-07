# 🏨 Hotel Booking Backend

This is the backend part of a hotel booking application built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**. It follows a modular architecture with clear separation of concerns (controllers, services, models, middlewares, exceptions).

---

## 📁 Project Structure

```
src/
├── config/             # Database connection and environment config
├── controllers/        # Route handlers
├── services/           # Business logic
├── models/             # Mongoose schemas
├── routes/             # API routes
├── middlewares/        # Error handler, auth checker, etc.
├── exceptions/         # Custom error classes
├── utils/              # Enums and helper utilities
└── server.ts           # Application entry point
```

---

## ⚙️ Technologies

- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- JWT (Authentication)
- bcryptjs (Password hashing)
- cookie-parser
- cors
- Twilio (for notifications)
- uuid
- dotenv

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MykhailoIvchenko/hotel-booking.git
cd server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root using the .env.example file.

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Build and Start Production Server

```bash
npm run build
npm start
```

---

## 📜 Scripts

| Script          | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Start server in development with `nodemon` |
| `npm run build` | Compile TypeScript into `dist/` folder     |
| `npm start`     | Run compiled server from `dist/server.js`  |

---

## 🧰 Nodemon Configuration

Stored in `nodemon.json`:

```json
{
  "watch": ["src"],
  "ext": ".js,.ts",
  "ignore": [],
  "env": {
    "NODE_ENV": "development"
  },
  "exec": "tsc && node dist/server.js"
}
```

---

## 🌐 API Routes

Base paths are defined using `BaseRoutes` enum:

| Base Route           | Description            |
| -------------------- | ---------------------- |
| `/api/auth`          | Authentication routes  |
| `/api/users`         | User-related actions   |
| `/api/hotels`        | Hotel management       |
| `/api/bookings`      | Booking logic          |
| `/api/notifications` | Notification endpoints |

Each route is connected to its corresponding router, controller, and service for separation of concerns.

---

## ❗ Error Handling

Errors are handled using a custom `ApiError` class and centralized `errorMiddleware`.

---

## 🔒 Authentication

JWT-based authentication is used. Tokens are stored in HTTP-only cookies, and `cookie-parser` is used to extract them on requests.

Protected routes require a valid token. Unauthorized access returns a 401 status code.

---

## 🛠 MongoDB Connection

MongoDB is connected via Mongoose. Connection logic is located in `src/config/db.ts`. On startup, the database is connected before the server begins listening.

---

## 📦 Build Output

After running `npm run build`, compiled JS files are placed in:

```
dist/
└── server.js (main entry point)
```

Ensure this path matches `"main"` in `package.json`.

---
