# Practiquemos.cl

## Overview

Practiquemos.cl is a mobile-first exam preparation platform for the Chilean driver's license test. It provides practice exams, study materials (temario), progress tracking, and a gamified learning experience with a mascot "copiloto" companion. The app follows a freemium model with free limited exams and premium plans (10-day and 30-day access).

The project is built as an Expo React Native application that runs on web, iOS, and Android, with a Node.js/Express backend API and PostgreSQL database. The frontend uses expo-router for file-based routing, and the backend serves the API plus static assets in production.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend (Expo React Native)

- **Framework**: Expo SDK 54 with React Native 0.81, targeting web, iOS, and Android from a single codebase.
- **Routing**: expo-router (file-based routing). All screens are in the `app/` directory as flat files (no tab navigation — uses a Stack navigator with `headerShown: false`).
- **State Management**: React Context (`lib/UserContext.tsx`) for user authentication state. TanStack React Query (`@tanstack/react-query`) for server data fetching.
- **Styling**: React Native `StyleSheet` objects (not Tailwind). The design system uses a custom color palette defined in `constants/colors.ts` — blue primary (#1d4ed8), amber accent (#f59e0b), slate neutrals.
- **Fonts**: Nunito (Google Fonts via `@expo-google-fonts/nunito`) in Regular, SemiBold, Bold, and ExtraBold weights.
- **Animations**: `react-native-reanimated` for the mascot copilot component animations.
- **Key UX Pattern**: The mascot "copiloto" (`components/MascotaCopiloto.tsx`) provides positive reinforcement feedback during exams. No harsh red colors for errors — uses orange/amber tones instead.

### Screen Structure

| Screen | Purpose |
|--------|---------|
| `index` | Home/main menu with exam mode selection and license type picker |
| `login` / `register` | Authentication screens |
| `exam` | Exam engine with timer, question navigation, learning mode |
| `results` | Post-exam results with category breakdown |
| `history` | Past exam results list |
| `temario` / `temario-detail` | Study material chapters and sections |
| `mi-curso` | Progress tracking per category |
| `favoritos` | Saved/bookmarked questions |
| `plans` | Premium subscription plans display |
| `perfil` | User profile and settings |
| `admin` | Admin panel for user management |
| `contacto` / `nosotros` | Static info pages |

### Backend (Express.js)

- **Runtime**: Node.js with Express 5, written in TypeScript, compiled with `tsx` (dev) or `esbuild` (prod).
- **Entry point**: `server/index.ts` — sets up CORS, JSON parsing, routes, and static file serving.
- **Routes**: `server/routes.ts` — RESTful API with auth middleware. Uses in-memory session tokens (Map-based, not JWT persistence).
- **Authentication**: SHA-256 password hashing (via Node's `crypto`). Bearer token sessions stored in-memory on the server. Tokens are stored client-side in AsyncStorage.
- **Storage layer**: `server/storage.ts` — `DatabaseStorage` class implementing `IStorage` interface with Drizzle ORM queries. This abstraction makes swapping storage implementations straightforward.

### API Structure

- `POST /api/auth/login` — Login with username/password, returns bearer token
- `POST /api/auth/register` — Create new user account
- `GET /api/exam-results` — Get user's exam history
- `POST /api/exam-results` — Save exam result
- `GET /api/favorites/:licenseType` — Get favorited question IDs
- `POST /api/favorites` / `DELETE /api/favorites/:id/:licenseType` — Manage favorites
- `GET /api/progress/:licenseType` — Get category progress
- `GET /api/admin/users` — Admin: list all users
- `POST /api/admin/users` — Admin: create user
- `PUT /api/admin/users/:id` — Admin: update user
- `DELETE /api/admin/users/:id` — Admin: delete user

### Database (PostgreSQL + Drizzle ORM)

- **ORM**: Drizzle ORM with PostgreSQL dialect.
- **Schema**: Defined in `shared/schema.ts` with validation schemas via `drizzle-zod`.
- **Tables**:
  - `users` — id (UUID), username (unique), password (hashed), email, fullName, role, plan, planExpiry, licenseType, timestamps
  - `exam_results` — id, userId (FK), examMode, licenseType, scores, passed, timeSpent, categoryBreakdown (JSONB)
  - `favorites` — id, userId (FK), questionId, licenseType
  - `category_progress` — id, userId, licenseType, category, progress tracking
- **Migrations**: Generated via `drizzle-kit` to `./migrations/` directory. Push with `npm run db:push`.

### Question Data

Questions are currently stored client-side in `lib/mockDatabase.ts` as a static array. This file contains the full question bank, license types, categories, and temario (study material) chapters. The exam engine (`app/exam.tsx`) pulls from this local data and supports multiple exam modes: daily, easy, hard, category-specific, and smart (randomized).

### Build & Deployment

- **Dev**: Two processes — `expo:dev` (Expo Metro bundler) and `server:dev` (Express API with tsx).
- **Production**: Expo static web build (`expo:static:build`) + esbuild for server (`server:build`), served by `server:prod`.
- **Build script**: `scripts/build.js` handles the static export process, starting Metro, fetching bundles, and writing to disk.
- **Environment**: `EXPO_PUBLIC_DOMAIN` connects the mobile app to the API server. `DATABASE_URL` for PostgreSQL.

## External Dependencies

### Database
- **PostgreSQL** — Primary data store, connected via `DATABASE_URL` environment variable. Uses `pg` (node-postgres) driver with Drizzle ORM.

### Key NPM Packages
- `expo` (SDK 54) — Cross-platform framework
- `expo-router` — File-based navigation
- `@tanstack/react-query` — Server state management
- `drizzle-orm` + `drizzle-kit` — Database ORM and migrations
- `express` v5 — API server
- `react-native-reanimated` — Animations
- `react-native-gesture-handler` — Touch handling
- `@react-native-async-storage/async-storage` — Client-side token persistence
- `expo-linear-gradient` — Gradient headers throughout the app
- `@expo-google-fonts/nunito` — Typography

### External Services
- No third-party auth providers (custom username/password auth)
- No payment processing yet (plans page is display-only)
- No external analytics or crash reporting
- Contact links to email (contacto@practiquemos.cl), WhatsApp, and Instagram