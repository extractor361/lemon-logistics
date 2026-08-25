# Lemon Logistics

Official web application for **Lemon Logistics**.

This project is built with **React + Vite** and connected to **Base44** for application services and backend functionality.

The source code is synchronized through GitHub and can be deployed independently through **Vercel**.

## Development

Clone the repository and install dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

## Base44

The application can use the hosted Base44 backend.

For local frontend development, create a `.env.local` file in the project root:

```env
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=https://your-app.base44.app
```

To use the complete Base44 local development environment:

```bash
npm install -g base44@latest
base44 dev
```

Changes pushed to this GitHub repository are synchronized with the connected Base44 project.

## Build

Create a production build with:

```bash
npm run build
```

The generated production files are located in:

```text
dist/
```

## Deployment

The frontend can be deployed through **Vercel** directly from the `main` branch of this repository.

Recommended Vercel configuration:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

Every new commit pushed to the `main` branch can trigger a new Vercel deployment.

---

**Lemon Logistics**
Reliable logistics solutions for your business.
