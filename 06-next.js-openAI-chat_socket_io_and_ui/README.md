This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

````bash
## Getting Started

### Requirements
- **Node.js** (recommended LTS)
- **npm**

### Install dependencies
```bash
npm install
````

---

## Running the Application

### 1. Start the Socket.IO Backend Server

Go to the `server` directory and run:

```bash
cd server
npm install
npm start
```

The backend server will start on `http://localhost:4000` by default.

### 2. Start the Next.js Frontend

Return to the main project directory and run:

```bash
npm run dev
```

The frontend will start on `http://localhost:3000`.

> **Important:** Both servers must be running for the chat app to work correctly.

---

## Build and Run (production)

### Build (TurboPack-optimized)

```bash
npm run build
```

### Start the compiled app

```bash
npm start
```

Open `http://localhost:3000` in your browser to see the production build.

---

## Project structure (high level)

- **app/** — application routes and project pages
- **chatapp/** — main chat app logic
- **components/** — UI components
- **public/** — static assets
- **server/** — Socket.IO + Express backend
- **package.json** — scripts and dependencies

---

## Learn more

- **Next.js Documentation**: https://nextjs.org/docs
- **Socket.IO Documentation**: https://socket.io/docs/v4
- **OpenAI API Docs**: https://platform.openai.com/docs/api-reference

---

## Deploy on Vercel

The easiest way to deploy a Next.js app is with the **Vercel** platform. See the Next.js deployment docs for configuration details and recommended settings: https://nextjs.org/docs/app/building-your-application/deploying

---

## License

MIT
