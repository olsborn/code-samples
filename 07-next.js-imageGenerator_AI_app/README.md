# Next.js AI Image Generator App

This is a [Next.js](https://nextjs.org) project that generates images using AI models through the Replicate API. The application provides a user-friendly interface to create images from text prompts using various AI models.

**Repository:** [https://github.com/olsborn/code-samples.git](https://github.com/olsborn/code-samples.git)

---

## Prerequisites

- **Node.js** (recommended LTS version)
- **npm** or **yarn**
- **Replicate API Token** (see instructions below)

---

## Getting the Replicate API Token

To use this application, you need a Replicate API token:

1. Go to [https://replicate.com/](https://replicate.com/)
2. Sign up or log in to your account
3. Navigate to your **Account Settings** or go directly to [https://replicate.com/account/api-tokens](https://replicate.com/account/api-tokens)
4. Click **"Create token"** or copy your existing API token
5. Copy the generated token and store it securely

> **Note:** Replicate API usage is billed based on the models you use. Check the [pricing](https://replicate.com/pricing) for each model and set up billing if needed.

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/olsborn/code-samples.git
cd code-samples/07-next.js-imageGenerator_AI_app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory by copying the example file:

```bash
cp .env.example .env.local
```

Edit the `.env.local` file and add your Replicate API token:

```env
REPLICATE_API_TOKEN=your-replicate-api-token-here
```

Replace `your-replicate-api-token-here` with the API token you obtained from Replicate.

---

## Running the Application

### Development Mode

Start the development server with TurboPack:

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000).

Open your browser and navigate to `http://localhost:3000` to use the image generator.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## How to Use

1. Open the application in your browser
2. Enter a descriptive text prompt for the image you want to generate
3. Select an AI model from the available options
4. Choose your preferred aspect ratio
5. Click the generate button
6. Wait for the AI to create your image
7. View and download the generated image

---

## Project Structure

- **app/** — Next.js app directory with routes and pages
  - **api/replicate/** — API route for Replicate integration
- **components/** — React UI components
- **datajson/** — Model configurations and data
- **public/** — Static assets and icons
- **package.json** — Project scripts and dependencies

---

## Features

- 🎨 Generate images from text prompts using AI
- 🤖 Multiple AI models to choose from
- 📐 Customizable aspect ratios
- 💡 Modern, responsive UI
- ⚡ Built with Next.js 15 and React 19
- 🚀 TurboPack for faster builds

---

## Learn More

- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Replicate Documentation**: [https://replicate.com/docs](https://replicate.com/docs)
- **Replicate Models**: [https://replicate.com/explore](https://replicate.com/explore)

---

## Deploy on Vercel

The easiest way to deploy a Next.js app is with the **Vercel** platform:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your `REPLICATE_API_TOKEN` in the environment variables section
4. Deploy

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## License

MIT
