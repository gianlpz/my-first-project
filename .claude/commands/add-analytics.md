# Add Analytics

Add Posthog or Mixpanel tracking to your project.

## Usage
```
/add-analytics [provider]
```

## Arguments
- `provider` (optional): `posthog` (default) or `mixpanel`

## Instructions

You are adding analytics to a Next.js project. Follow these steps:

### For PostHog

#### Step 1: Install Dependencies
```bash
npm install posthog-js
```

#### Step 2: Set Up Environment Variables
Add to `.env.local`:
```
NEXT_PUBLIC_POSTHOG_KEY=phc_...
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

#### Step 3: Create PostHog Provider
**`src/lib/analytics/posthog.tsx`:**
```typescript
"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        person_profiles: "identified_only",
        capture_pageview: false, // We'll capture manually for SPA
        capture_pageleave: true,
      });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
```

#### Step 4: Create Page View Tracker
**`src/lib/analytics/PageViewTracker.tsx`:**
```typescript
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { usePostHog } from "posthog-js/react";

function PageViewTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + "?" + searchParams.toString();
      }
      posthog.capture("$pageview", { $current_url: url });
    }
  }, [pathname, searchParams, posthog]);

  return null;
}

export function PageViewTracker() {
  return (
    <Suspense fallback={null}>
      <PageViewTrackerInner />
    </Suspense>
  );
}
```

#### Step 5: Add to Root Layout
**`src/app/layout.tsx`:**
```typescript
import { PostHogProvider } from "@/lib/analytics/posthog";
import { PageViewTracker } from "@/lib/analytics/PageViewTracker";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PostHogProvider>
          <PageViewTracker />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
```

#### Step 6: Create Analytics Hook
**`src/hooks/useAnalytics.ts`:**
```typescript
"use client";

import { usePostHog } from "posthog-js/react";
import { useCallback } from "react";

export function useAnalytics() {
  const posthog = usePostHog();

  const track = useCallback(
    (event: string, properties?: Record<string, any>) => {
      posthog?.capture(event, properties);
    },
    [posthog]
  );

  const identify = useCallback(
    (userId: string, properties?: Record<string, any>) => {
      posthog?.identify(userId, properties);
    },
    [posthog]
  );

  const reset = useCallback(() => {
    posthog?.reset();
  }, [posthog]);

  return { track, identify, reset };
}
```

---

### For Mixpanel

#### Step 1: Install Dependencies
```bash
npm install mixpanel-browser
npm install --save-dev @types/mixpanel-browser
```

#### Step 2: Set Up Environment Variables
```
NEXT_PUBLIC_MIXPANEL_TOKEN=your_project_token
```

#### Step 3: Create Mixpanel Provider
**`src/lib/analytics/mixpanel.tsx`:**
```typescript
"use client";

import mixpanel from "mixpanel-browser";
import { createContext, useContext, useEffect, ReactNode } from "react";

const MixpanelContext = createContext<typeof mixpanel | null>(null);

export function MixpanelProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
        track_pageview: true,
        persistence: "localStorage",
      });
    }
  }, []);

  return (
    <MixpanelContext.Provider value={mixpanel}>
      {children}
    </MixpanelContext.Provider>
  );
}

export function useMixpanel() {
  return useContext(MixpanelContext);
}
```

#### Step 4: Create Analytics Hook
**`src/hooks/useAnalytics.ts`:**
```typescript
"use client";

import { useMixpanel } from "@/lib/analytics/mixpanel";
import { useCallback } from "react";

export function useAnalytics() {
  const mixpanel = useMixpanel();

  const track = useCallback(
    (event: string, properties?: Record<string, any>) => {
      mixpanel?.track(event, properties);
    },
    [mixpanel]
  );

  const identify = useCallback(
    (userId: string, properties?: Record<string, any>) => {
      mixpanel?.identify(userId);
      if (properties) {
        mixpanel?.people.set(properties);
      }
    },
    [mixpanel]
  );

  const reset = useCallback(() => {
    mixpanel?.reset();
  }, [mixpanel]);

  return { track, identify, reset };
}
```

---

## Usage Example
```typescript
"use client";

import { useAnalytics } from "@/hooks/useAnalytics";

export function SignUpButton() {
  const { track } = useAnalytics();

  const handleClick = () => {
    track("signup_button_clicked", {
      location: "header",
      variant: "primary",
    });
    // ... rest of handler
  };

  return <button onClick={handleClick}>Sign Up</button>;
}
```

## Output
- List of created files
- Environment variables needed
- Usage examples
- Link to provider dashboard setup

## Notes
- Always check for client-side before initializing
- Respect user privacy preferences (cookie consent)
- Use meaningful event names
- Include relevant properties with events
- Test tracking in development before production
