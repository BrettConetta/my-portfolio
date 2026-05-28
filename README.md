# my-portfolio

Full-stack TypeScript project.

## Structure
- `backend/` — Node.js + Express + TypeScript API
- `frontend/` — React + Vite + TypeScript

## Development

### Backend
```bash
cd backend
npm run dev
```

### Frontend
```bash
cd frontend
npm run dev
```

Run both services for full-stack behavior (nav loads from the API via Vite’s `/api` proxy).

## Environment variables

### Local development
No `.env` files required. The frontend uses relative `/api` URLs; Vite proxies them to `http://localhost:3001`. The backend allows `http://localhost:5173` for CORS.

### Railway

| Service  | Variable        | Example value |
|----------|-----------------|---------------|
| Frontend | `VITE_API_URL`  | `https://backend-production-12c71.up.railway.app` |
| Backend  | `FRONTEND_URL`  | `https://frontend-production-bb6e.up.railway.app` |

Set these on each Railway service, then redeploy the frontend so `VITE_API_URL` is baked into the build.

**Frontend:** root `frontend`, build `npm run build`, start `npm start`  
**Backend:** root `backend`, build `npm run build`, start `npm start`

Copy `.env.example` in each package for reference.
