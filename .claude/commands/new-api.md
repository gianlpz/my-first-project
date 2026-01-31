# New API

Scaffold API routes with Next.js App Router conventions.

## Usage
```
/new-api <route-path> [methods]
```

## Arguments
- `route-path`: API path (e.g., `users`, `posts/[id]`, `webhooks/stripe`)
- `methods` (optional): HTTP methods to implement - `GET`, `POST`, `PUT`, `DELETE`, `PATCH`

## Instructions

You are creating a new API route. Follow these steps:

### Step 1: Create Route File
Determine the file path:
- `users` → `src/app/api/users/route.ts`
- `posts/[id]` → `src/app/api/posts/[id]/route.ts`
- `webhooks/stripe` → `src/app/api/webhooks/stripe/route.ts`

### Step 2: Create Directory
```bash
mkdir -p src/app/api/[route-path]
```

### Step 3: Generate Route Handler

**Basic CRUD Route:**
```typescript
// src/app/api/[resource]/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get query params
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page") ?? "1";

    // Fetch data
    const data = await getData();

    return NextResponse.json({ data });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validated = schema.parse(body);

    // Create resource
    const result = await createResource(validated);

    return NextResponse.json({ data: result }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "Failed to create resource" },
      { status: 500 }
    );
  }
}
```

**Dynamic Route (with ID):**
```typescript
// src/app/api/[resource]/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;
    const data = await getById(id);

    if (!data) {
      return NextResponse.json(
        { error: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const validated = updateSchema.parse(body);
    const result = await updateById(id, validated);

    return NextResponse.json({ data: result });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: "Failed to update" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;
    await deleteById(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to delete" },
      { status: 500 }
    );
  }
}
```

**Webhook Route:**
```typescript
// src/app/api/webhooks/[provider]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get("x-signature");

    // Verify webhook signature
    const isValid = verifySignature(body, signature);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    const event = JSON.parse(body);

    // Handle webhook event
    await handleWebhookEvent(event);

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
```

### Step 4: Create Validation Schema
```typescript
// src/lib/validations/[resource].ts
import { z } from "zod";

export const createSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  // ... other fields
});

export const updateSchema = createSchema.partial();

export type CreateInput = z.infer<typeof createSchema>;
export type UpdateInput = z.infer<typeof updateSchema>;
```

### Step 5: Add Type Definitions
```typescript
// src/types/api.ts
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  details?: unknown;
}
```

## Output
- Created route file path
- API endpoint URL
- Validation schema (if created)
- Example curl commands for testing

## Notes
- Always validate input with Zod
- Use proper HTTP status codes
- Log errors server-side
- Return consistent response shapes
- Handle authentication where needed
