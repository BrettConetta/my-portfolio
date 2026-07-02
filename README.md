# my-portfolio

Full-stack TypeScript portfolio.

## Structure

- `backend/` — Node.js + Express + TypeScript API
- `frontend/` — React + Vite + TypeScript
- `vercel.json` — Vercel Services config (frontend + backend on one domain)

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

Run both for full-stack behavior. The frontend uses relative `/api` URLs; Vite proxies them to `http://localhost:3001`.

## Environment variables

### Local development

Copy `backend/.env.example` to `backend/.env` and set `CONTACT_TO` and `RESEND_API_KEY`. Restart the backend after changes.

### Production (Vercel)

Deploy as a single Vercel project with the **Services** preset. Root directory should be the repo root (`./`). Routing is defined in `vercel.json`:

- `/api/*` → `backend` (Express at `backend/src/index.ts`)
- everything else → `frontend` (Vite static build)

Set these in the Vercel project → **Settings → Environment Variables**:

| Variable         | Required | Notes                                   |
| ---------------- | -------- | --------------------------------------- |
| `RESEND_API_KEY` | Yes      | Resend API key                          |
| `CONTACT_TO`     | Yes      | Inbox for contact form submissions      |
| `RESEND_FROM`    | No       | Custom sender after domain verification |

Redeploy if environment variables are added after the first deploy.

## Contact form

The contact form sends mail through [Resend](https://resend.com/docs) over HTTPS.

Without a verified domain, Resend's test sender (`onboarding@resend.dev`) only delivers to the email address on your Resend account — use that same address for `CONTACT_TO`. To use a custom "From" address, verify your domain in Resend and set `RESEND_FROM`.
