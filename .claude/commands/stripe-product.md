# Stripe Product

Create products and prices via Stripe API.

## Usage
```
/stripe-product <product-name> <price> [type]
```

## Arguments
- `product-name`: Name of the product
- `price`: Price amount (e.g., `9.99`, `29`)
- `type` (optional): `one-time` (default) or `recurring`

## Instructions

You are creating a Stripe product and price. Follow these steps:

### Step 1: Verify Stripe CLI Access
```bash
# Check if logged in
stripe config --list

# Login if needed
stripe login
```

### Step 2: Create Product via CLI

**One-time product:**
```bash
stripe products create \
  --name="[Product Name]" \
  --description="[Product description]"
```

**With metadata:**
```bash
stripe products create \
  --name="[Product Name]" \
  --description="[Product description]" \
  --metadata[tier]="pro" \
  --metadata[features]="feature1,feature2"
```

### Step 3: Create Price

**One-time price:**
```bash
stripe prices create \
  --product="[product_id]" \
  --unit-amount=[amount_in_cents] \
  --currency=usd
```

**Recurring price (subscription):**
```bash
stripe prices create \
  --product="[product_id]" \
  --unit-amount=[amount_in_cents] \
  --currency=usd \
  --recurring[interval]=month
```

**With trial period:**
```bash
stripe prices create \
  --product="[product_id]" \
  --unit-amount=[amount_in_cents] \
  --currency=usd \
  --recurring[interval]=month \
  --recurring[trial_period_days]=14
```

### Alternative: Create via API
If CLI isn't available, create via API route:

**`src/app/api/stripe/products/route.ts`:**
```typescript
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/server";

export async function POST(request: NextRequest) {
  try {
    const { name, description, price, currency = "usd", recurring } = await request.json();

    // Create product
    const product = await stripe.products.create({
      name,
      description,
    });

    // Create price
    const priceData: any = {
      product: product.id,
      unit_amount: Math.round(price * 100), // Convert to cents
      currency,
    };

    if (recurring) {
      priceData.recurring = {
        interval: recurring.interval || "month",
        interval_count: recurring.intervalCount || 1,
      };
    }

    const stripePrice = await stripe.prices.create(priceData);

    return NextResponse.json({
      product,
      price: stripePrice,
    });
  } catch (error) {
    console.error("Product creation error:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
```

### Step 4: Store Product/Price IDs
Create a constants file for easy reference:

**`src/lib/stripe/products.ts`:**
```typescript
export const PRODUCTS = {
  PRO_MONTHLY: {
    productId: "prod_xxx",
    priceId: "price_xxx",
    name: "Pro Monthly",
    price: 29,
    interval: "month",
  },
  PRO_YEARLY: {
    productId: "prod_xxx",
    priceId: "price_yyy",
    name: "Pro Yearly",
    price: 290,
    interval: "year",
  },
  LIFETIME: {
    productId: "prod_zzz",
    priceId: "price_zzz",
    name: "Lifetime Access",
    price: 499,
    interval: null,
  },
} as const;

export type ProductKey = keyof typeof PRODUCTS;
```

### Step 5: Verify Creation
```bash
# List products
stripe products list --limit 5

# List prices for a product
stripe prices list --product=[product_id]

# Get specific product
stripe products retrieve [product_id]
```

## Common Pricing Models

**Simple one-time:**
```bash
stripe products create --name="E-book"
stripe prices create --product=prod_xxx --unit-amount=1999 --currency=usd
```

**Monthly subscription:**
```bash
stripe products create --name="Pro Plan"
stripe prices create --product=prod_xxx --unit-amount=2900 --currency=usd \
  --recurring[interval]=month
```

**Yearly subscription (with discount):**
```bash
stripe prices create --product=prod_xxx --unit-amount=29000 --currency=usd \
  --recurring[interval]=year
```

**Tiered pricing:**
```bash
stripe prices create --product=prod_xxx --currency=usd \
  --recurring[interval]=month \
  --billing-scheme=tiered \
  --tiers-mode=graduated \
  --tiers[0][up_to]=100 --tiers[0][unit_amount]=10 \
  --tiers[1][up_to]=inf --tiers[1][unit_amount]=5
```

**Usage-based (metered):**
```bash
stripe prices create --product=prod_xxx --currency=usd \
  --recurring[interval]=month \
  --recurring[usage_type]=metered \
  --billing-scheme=per_unit \
  --unit-amount=1
```

## Output
Provide:
- Created product ID
- Created price ID
- Product details summary
- Code snippet for using the price ID

## Product Management Tips

**Update product:**
```bash
stripe products update prod_xxx --name="New Name"
```

**Archive product:**
```bash
stripe products update prod_xxx --active=false
```

**Archive price (can't delete, only archive):**
```bash
stripe prices update price_xxx --active=false
```

## Notes
- Prices are immutable - create new ones for changes
- Use test mode for development
- Store IDs in environment variables or constants
- Use metadata for custom attributes
- Product IDs start with `prod_`, price IDs with `price_`
