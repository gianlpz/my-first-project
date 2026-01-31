# New Project

Scaffold a full Next.js project with your preferred configuration.

## Usage
```
/new-project <project-name> [template]
```

## Arguments
- `project-name`: Name for the new project
- `template` (optional): Template type - `default`, `minimal`, `full-stack`

## Instructions

You are scaffolding a new Next.js project. Follow these steps:

### Step 1: Create Next.js Project
Run the create-next-app command with preferred defaults:

```bash
npx create-next-app@latest $ARGUMENTS --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Step 2: Install Additional Dependencies
Based on the user's stack, install common dependencies:

```bash
# UI & Styling
npm install clsx tailwind-merge class-variance-authority
npm install lucide-react  # Icons

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# Data Fetching
npm install @tanstack/react-query

# Utilities
npm install date-fns
```

### Step 3: Set Up Project Structure
Create the recommended folder structure:

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth route group
│   ├── (dashboard)/       # Dashboard route group
│   ├── api/               # API routes
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                # Reusable UI components
│   └── shared/            # Shared components
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── validations.ts     # Zod schemas
│   └── constants.ts       # App constants
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
└── styles/
    └── globals.css
```

### Step 4: Create Utility Files

**lib/utils.ts:**
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Step 5: Update Configuration Files

**tailwind.config.ts** - Add common extensions:
- Custom colors from design system
- Animation utilities
- Container settings

**tsconfig.json** - Verify path aliases are set up

### Step 6: Set Up Environment
Create `.env.local` template:
```
# Database
DATABASE_URL=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=
```

Create `.env.example` with same keys (no values).

### Step 7: Initialize Git
```bash
git init
git add .
git commit -m "Initial project setup with Next.js, TypeScript, and Tailwind"
```

## Output
Provide:
- Summary of what was created
- Next steps for the user
- Commands to run the development server

## Notes
- Always use TypeScript
- App Router is the default (not Pages Router)
- Tailwind CSS for styling
- ESLint with recommended rules
