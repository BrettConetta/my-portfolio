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

Run both services for full-stack behavior (the contact form posts to the API via Vite’s `/api` proxy).

## Environment variables

### Local development
The frontend uses relative `/api` URLs; Vite proxies them to `http://localhost:3001`. The backend allows `http://localhost:5173` for CORS.

The **contact form** needs a Resend API key in `backend/.env` (see [Contact form email](#contact-form-email) below).

### Railway

| Service  | Variable        | Example value |
|----------|-----------------|---------------|
| Frontend | `VITE_API_URL`  | `https://backend-production-12c71.up.railway.app` |
| Backend  | `FRONTEND_URL`  | `https://frontend-production-bb6e.up.railway.app` |
| Backend  | `CONTACT_TO`    | `brettconetta76@gmail.com` |
| Backend  | `RESEND_API_KEY`| Your Resend API key (see below) |

Set these on each Railway service, then redeploy the frontend so `VITE_API_URL` is baked into the build.

### Contact form email

The contact form sends mail through [Resend](https://resend.com/) over HTTPS (works on Railway; SMTP is blocked on Hobby plans).

#### 1. Create a Resend API key

1. Sign up at [resend.com](https://resend.com).
2. Open **API Keys** and create a key.
3. Copy the key (starts with `re_`).

Without a verified domain, use Resend’s test sender `onboarding@resend.dev`. On the free tier, that address can only deliver to the email you signed up with — use `brettconetta76@gmail.com` for both your Resend account and `CONTACT_TO`.

To use a custom “From” address later, verify your domain in Resend and set `RESEND_FROM` (e.g. `Portfolio contact form <contact@yourdomain.com>`).

#### 2. Where to put the API key

**Local development**

1. Copy `backend/.env.example` to `backend/.env` (this file is gitignored).
2. Set:

   ```env
   CONTACT_TO=brettconetta76@gmail.com
   RESEND_API_KEY=re_your_api_key_here
   ```

3. Restart the backend (`npm run dev` in `backend/`).

**Production (Railway)**

In the **backend** service → **Variables**, add:

- `CONTACT_TO` = `brettconetta76@gmail.com`
- `RESEND_API_KEY` = your Resend API key

Remove any old `SMTP_USER` / `SMTP_PASS` variables if present. Redeploy the backend after saving.

**Frontend:** root `frontend`, build `npm run build`, start `npm start`  
**Backend:** root `backend`, build `npm run build`, start `npm start`

Copy `.env.example` in each package for reference.
