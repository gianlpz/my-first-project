# New Page

Create Next.js pages/routes with App Router conventions.

## Usage
```
/new-page <route-path> [page-type]
```

## Arguments
- `route-path`: The URL path (e.g., `dashboard`, `settings/profile`, `blog/[slug]`)
- `page-type` (optional): `static`, `dynamic`, `server`, `client`

## Instructions

You are creating a new Next.js page. Follow these steps:

### Step 1: Parse the Route
Determine the file structure from the route path:
- `dashboard` → `src/app/dashboard/page.tsx`
- `settings/profile` → `src/app/settings/profile/page.tsx`
- `blog/[slug]` → `src/app/blog/[slug]/page.tsx`
- `(auth)/login` → `src/app/(auth)/login/page.tsx`

### Step 2: Create Directory Structure
```bash
mkdir -p src/app/[route-path]
```

### Step 3: Create Page File
Choose template based on page type:

**Static Page (default):**
```tsx
// src/app/[route]/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function PageName() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">Page Title</h1>
    </main>
  );
}
```

**Dynamic Page (with params):**
```tsx
// src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  // Fetch data for metadata
  return {
    title: `Post: ${slug}`,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  // Fetch data
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
    </article>
  );
}
```

**Server Component with Data:**
```tsx
// src/app/dashboard/page.tsx
import { Suspense } from "react";

async function getData() {
  // Fetch data on server
  return { /* data */ };
}

export default async function Dashboard() {
  const data = await getData();

  return (
    <main className="container mx-auto py-8">
      <Suspense fallback={<Loading />}>
        <DashboardContent data={data} />
      </Suspense>
    </main>
  );
}

function Loading() {
  return <div>Loading...</div>;
}
```

**Client Component:**
```tsx
// src/app/interactive/page.tsx
"use client";

import { useState } from "react";

export default function InteractivePage() {
  const [state, setState] = useState();

  return (
    <main className="container mx-auto py-8">
      {/* Interactive content */}
    </main>
  );
}
```

### Step 4: Create Layout (if needed)
If this route needs a specific layout:

```tsx
// src/app/[route]/layout.tsx
export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav>{/* Route-specific nav */}</nav>
      {children}
    </div>
  );
}
```

### Step 5: Create Loading & Error States
```tsx
// src/app/[route]/loading.tsx
export default function Loading() {
  return <div className="animate-pulse">Loading...</div>;
}

// src/app/[route]/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

## Route Groups
Use `(groupName)` for organizational grouping without affecting URL:
- `(auth)` - Auth-related pages
- `(dashboard)` - Dashboard pages
- `(marketing)` - Marketing pages

## Output
- Created file paths
- The route URL
- Any associated files (layout, loading, error)

## Notes
- Use Server Components by default
- Add "use client" only when needed
- Include metadata for SEO
- Create loading/error boundaries for better UX
