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
The frontend uses relative `/api` URLs; Vite proxies them to `http://localhost:3001`. The backend allows `http://localhost:5173` for CORS.

Nav works without extra config. The **contact form** needs SMTP credentials in `backend/.env` (see [Contact form email](#contact-form-email) below).

### Railway

| Service  | Variable        | Example value |
|----------|-----------------|---------------|
| Frontend | `VITE_API_URL`  | `https://backend-production-12c71.up.railway.app` |
| Backend  | `FRONTEND_URL`  | `https://frontend-production-bb6e.up.railway.app` |
| Backend  | `CONTACT_TO`    | `brettconetta76@gmail.com` |
| Backend  | `SMTP_USER`     | `brettconetta76@gmail.com` |
| Backend  | `SMTP_PASS`     | Your Gmail App Password (see below) |

Set these on each Railway service, then redeploy the frontend so `VITE_API_URL` is baked into the build.

### Contact form email

The contact form sends mail through Gmail SMTP using [Nodemailer](https://nodemailer.com/). You need a **Gmail App Password** — not your normal Gmail password.

#### 1. Create a Gmail App Password

1. Sign in to [Google Account](https://myaccount.google.com/) for `brettconetta76@gmail.com`.
2. Open **Security**.
3. Turn on **2-Step Verification** if it is not already enabled (required for app passwords).
4. Open **App passwords** (search for it on the Security page, or use [Google’s app password help](https://support.google.com/accounts/answer/185833)).
5. Choose **Mail** and **Other (Custom name)** — e.g. `Portfolio contact form`.
6. Click **Generate**. Google shows a **16-character password** (often grouped like `abcd efgh ijkl mnop`). Copy it.

#### 2. Where to put the app password

**Local development**

1. Copy `backend/.env.example` to `backend/.env` (this file is gitignored).
2. Set:

   ```env
   CONTACT_TO=brettconetta76@gmail.com
   SMTP_USER=brettconetta76@gmail.com
   SMTP_PASS=abcdefghijklmnop
   ```

   Paste the 16-character app password as `SMTP_PASS` (spaces optional).

3. Restart the backend (`npm run dev` in `backend/`).

**Production (Railway)**

In the **backend** service → **Variables**, add:

- `CONTACT_TO` = `brettconetta76@gmail.com`
- `SMTP_USER` = `brettconetta76@gmail.com`
- `SMTP_PASS` = your 16-character app password

Redeploy the backend after saving variables.

You can revoke the app password anytime under Google Account → Security → App passwords without changing your main Gmail password.

**Frontend:** root `frontend`, build `npm run build`, start `npm start`  
**Backend:** root `backend`, build `npm run build`, start `npm start`

Copy `.env.example` in each package for reference.
