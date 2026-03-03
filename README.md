# ConcoursDoctor

Dashboard platform for managing PhD entrance exams (frontend-only, mock data).

## Stack

- **React 19** (Vite)
- **TailwindCSS**
- **React Router**
- **Zustand** (state)
- **Axios** (mock data, no backend)

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Auth (demo)

- **Login**: use any email/password and select a role, then "Se connecter".
- **Quick login**: use the role buttons (Administrateur, Professeur, etc.) to sign in as that role without form submit.

## Roles & features

| Role        | Main features                                      |
|------------|-----------------------------------------------------|
| Admin      | Users, phases, professors, exercises, subjects, rooms, logs |
| Professor  | My exercises, upload exercise (UI), version history  |
| Corrector  | Anonymous copies list, correction form with score   |
| Supervisor | Attendance marking (mobile-friendly)                |
| Jury       | Anonymous ranking table, final validation          |

## Project structure

```
src/
├── api/           # Mock API client
├── components/    # Reusable UI (Button, Card, Table, Modal, Badge)
├── config/       # Nav config
├── data/         # Mock data
├── layout/       # Sidebar, Navbar, DashboardLayout
├── pages/        # Role-specific pages
├── stores/       # Zustand (auth)
└── types/        # Shared types
```

## Build

```bash
npm run build
npm run preview
```
