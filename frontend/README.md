# Hotel Booking Frontend

This is the frontend application for the Hotel Booking project, built with React and Vite.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Styling](#styling)
- [State Management](#state-management)
- [Routing](#routing)
- [API Integration](#api-integration)
- [Additional Tools](#additional-tools)
- [Contributing](#contributing)
- [License](#license)

---

## Technologies Used

- React 19
- Vite
- TypeScript
- Redux Toolkit
- React Router v7
- React Hook Form
- React Toastify
- React Calendar
- Swiper (for sliders/carousels)
- ESLint (with React Hooks plugin)
- vite-plugin-svgr (for importing SVGs as React components)

---

## Project Structure

```
public/
src/
  ├── assets/          # Static assets like images, icons, fonts
  ├── components/      # Reusable UI components
  ├── hooks/           # Custom React hooks
  ├── layout/          # Layout components (headers, footers, wrappers)
  ├── pages/           # Page-level components (routed views)
  ├── redux/           # Redux store setup and slices
  ├── routes/          # Route definitions and route guards
  ├── rtkQApi/         # RTK Query API for interaction with the backend part
  ├── services/        # Services with business logic and helper functions
  ├── utils/           # Utility types, enums, validation patterns
```

---

## Environment Variables

This project uses a `.env` file for environment-specific settings.

- `VITE_BASE_API_URL` — Base URL for backend API requests.

Make sure to create a `.env` file in the root directory (based on `.env.example`) before running the app.

---

## Getting Started

1. **Install dependencies:**

```bash
npm install
# or
yarn install
```

2. **Create `.env` file:**

Copy `.env.example` to `.env` and fill in the appropriate values.

3. **Start development server:**

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` (default Vite port).

---

## Available Scripts

- `dev` — Runs the app in development mode with hot reloading.
- `build` — Builds the app for production (compiles TypeScript and bundles with Vite).
- `preview` — Serves the production build locally for preview.
- `lint` — Runs ESLint to check code quality.

---

## Styling

- Uses **modular CSS** (CSS Modules) for component-scoped styles.
- No preprocessors (e.g. Sass) used.

---

## State Management

- Uses **Redux Toolkit** and **React-Redux** for global state management.
- Redux slices are located under `src/redux/`.
- Uses **RTK Query** in `src/rtkQApi/` for API data fetching.

---

## Routing

- Client-side routing is handled by **React Router v7**.
- Routes are defined in `src/routes/`.

---

## API Integration

- The frontend interacts with the backend API via `VITE_BASE_API_URL` configured in `.env`.

---

## Additional Tools

- **React Hook Form** — For managing form state and validation.
- **React Toastify** — For toast notifications and alerts.
- **React Error Boundary** — For graceful error handling in React components.
- **Swiper** — For sliders/carousels UI elements.
- **vite-plugin-svgr** — To import SVGs as React components.
- **ESLint** — With React Hooks plugin for linting and code quality.

---
