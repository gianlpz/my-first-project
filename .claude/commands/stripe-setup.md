# Stripe Setup

Set up Stripe integration in your Next.js project.

## Usage
```
/stripe-setup [mode]
```

## Arguments
- `mode` (optional): `checkout` (default), `elements`, `subscriptions`

## Instructions

You are setting up Stripe in a Next.js project. Follow these steps:

### Step 1: Install Dependencies
```bash
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
```

### Step 2: Set Up Environment Variables
Add to `.env.local`:
```
# Stripe Keys (get from https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Webhook Secret (get after creating webhook)
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Step 3: Create Stripe Client Libraries

**Server-side client (`src/lib/stripe/server.ts`):**
```typescript
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-12-18.acacia",
  typescript: true,
});
```

**Client-side loader (`src/lib/stripe/client.ts`):**
```typescript
import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );
  }
  return stripePromise;
}
```

### Step 4: Create Checkout Session API Route
**`src/app/api/stripe/checkout/route.ts`:**
```typescript
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/server";

export async function POST(request: NextRequest) {
  try {
    const { priceId, successUrl, cancelUrl } = await request.json();

    const session = await stripe.checkout.sessions.create({
      mode: "payment", // or "subscription"
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl || `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${request.nextUrl.origin}/canceled`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
```

### Step 5: Create Webhook Handler
**`src/app/api/stripe/webhook/route.ts`:**
```typescript
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: "Missing signature or webhook secret" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;
      // Fulfill the purchase
      await handleCheckoutComplete(session);
      break;

    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      // Handle successful payment
      break;

    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      const subscription = event.data.object as Stripe.Subscription;
      // Handle subscription changes
      await handleSubscriptionChange(subscription);
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  // Update your database, send confirmation email, etc.
  console.log("Checkout completed:", session.id);
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  // Update user subscription status in database
  console.log("Subscription changed:", subscription.id, subscription.status);
}
```

### Step 6: Create Checkout Button Component
**`src/components/CheckoutButton.tsx`:**
```typescript
"use client";

import { useState } from "react";
import { getStripe } from "@/lib/stripe/client";

interface CheckoutButtonProps {
  priceId: string;
  children: React.ReactNode;
}

export function CheckoutButton({ priceId, children }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleCheckout} disabled={loading}>
      {loading ? "Loading..." : children}
    </button>
  );
}
```

### Step 7: Set Up Webhook in Stripe Dashboard
1. Go to https://dashboard.stripe.com/webhooks
2. Add endpoint: `https://your-domain.com/api/stripe/webhook`
3. Select events to listen for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `customer.subscription.*`
4. Copy the signing secret to `STRIPE_WEBHOOK_SECRET`

### Step 8: Test Locally
```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Output
- Created files list
- Environment variables needed
- Next steps for Stripe Dashboard setup
- Test card numbers for development

## Test Card Numbers
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- 3D Secure: `4000 0025 0000 3155`

## Notes
- Always verify webhook signatures
- Use test mode keys during development
- Set up proper error handling
- Consider idempotency for webhooks
