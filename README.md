# Auth.js boilerplate

This is a boilerplate for a fullstack application using Next.js, NeonDB, Drizzle ORM, and Auth.js.

Thing you will need before running the project:

- Next.js
- Auth.js
- NeonDB
- Drizzle ORM
- Tailwind CSS
- ShadCN UI
- Resend Email Service

### 1. Create a .env.local file in the root of the project and add the following:

```bash
# .env.local
# Setup postgres database using NeonDB https://neon.tech/
POSTGRES_URL= # NeonDB URL

GOOGLE_CLIENT_ID= # Google OAuth Client ID
GOOGLE_CLIENT_SECRET= # Google OAuth Client Secret

GITHUB_CLIENT_ID= # Github OAuth Client ID
GITHUB_CLIENT_SECRET= # Github OAuth Client Secret

AUTH_SECRET= # Run npx auth secret

# Get API key from https://resend.com/docs/introduction
RESEND_API_KEY= # API key for sending email service

DOMAIN_URL=localhost:3000
```

## 2. Install the dependencies

```bash
npm install
npm run db:generate
npm run db:push 
```

## 3. Execute the project

```bash
npm run dev
# Enjoy! ;)
```