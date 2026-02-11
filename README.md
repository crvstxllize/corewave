CoreWave is a full‑stack app with a Next.js frontend and an Express + SQLite backend.

## Getting Started

## Requirements
- Node.js (LTS recommended)
- npm

## Setup & Run

### 1) Install
```bash
npm install
```

### 2) Environment
Create `corewave/.env.local` (see `.env.local.example`):
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Create `corewave/server/.env` (see `server/.env.example`):
```
PORT=5000
JWT_SECRET=dev_secret_change_me
TOKEN_EXPIRES_IN=1h
DB_FILE=./db/data.db
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

### 3) Run
From `corewave`:

```bash
npm run dev
```

Frontend: http://localhost:3000  
Backend: http://localhost:5000

### 4) Database
SQLite file is stored at `server/db/data.db`. Migrations run automatically on server start.

## Verify Auth Flow (Register → Login → Profile)
1. Open `http://localhost:3000`.
2. Register a new user.
3. Login with the same credentials.
4. You should land on `/profile` and see the profile data.
5. In DevTools → Network, ensure no CORS errors and that `/auth/register`, `/auth/login`, `/profile` return `200`.

## Project Structure
- `src/app` — Next.js routes (App Router)
- `src/components` — UI components
- `src/data` — static data/configs
- `server/index.js` — Express app entry
- `server/routes` — API routes
- `server/controllers` — request handlers
- `server/models` — DB access
- `server/db` — SQLite and migrations

## Repo Hygiene (demo safety)
`.next/`, `node_modules/`, and `server/db/data.db` should not be committed.  
For demos, let migrations recreate the DB on first run.
