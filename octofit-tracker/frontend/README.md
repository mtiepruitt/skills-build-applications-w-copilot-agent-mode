# OctoFit Tracker Frontend

React 19 + Vite presentation tier for the OctoFit Tracker multi-tier application.

## API Configuration

Define `VITE_CODESPACE_NAME` in `.env.local` when running in GitHub Codespaces:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, API requests use:

```text
https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

When `VITE_CODESPACE_NAME` is unset and the app is opened from a Codespaces forwarded URL, the frontend derives the API URL by switching the current host from port `5173` to port `8000`.

When `VITE_CODESPACE_NAME` is unset outside Codespaces, the app safely falls back to:

```text
http://localhost:8000/api/[component]/
```

## Scripts

```bash
npm run dev
npm run build
```
