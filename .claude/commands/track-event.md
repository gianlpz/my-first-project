# Track Event

Generate analytics event tracking code.

## Usage
```
/track-event <event-name> [properties]
```

## Arguments
- `event-name`: Name of the event to track (e.g., `button_clicked`, `form_submitted`)
- `properties` (optional): Properties to include with the event

## Instructions

You are adding event tracking to code. Follow these steps:

### Step 1: Understand the Event
Based on the event name and context, determine:
- What user action triggers this event
- What properties are relevant
- Where in the code to add tracking

### Step 2: Generate Tracking Code

**Basic event:**
```typescript
const { track } = useAnalytics();

track("button_clicked");
```

**With properties:**
```typescript
track("button_clicked", {
  button_name: "signup",
  location: "header",
  variant: "primary",
});
```

**In a component:**
```typescript
"use client";

import { useAnalytics } from "@/hooks/useAnalytics";

export function FeatureCard({ feature }: { feature: Feature }) {
  const { track } = useAnalytics();

  const handleClick = () => {
    track("feature_card_clicked", {
      feature_id: feature.id,
      feature_name: feature.name,
      category: feature.category,
    });
  };

  return (
    <div onClick={handleClick}>
      {/* card content */}
    </div>
  );
}
```

**Form submission:**
```typescript
const handleSubmit = async (data: FormData) => {
  track("form_submitted", {
    form_name: "contact",
    fields_filled: Object.keys(data).length,
  });

  // Submit form...

  track("form_submission_success", {
    form_name: "contact",
  });
};
```

**With error tracking:**
```typescript
try {
  await submitForm(data);
  track("checkout_completed", {
    order_id: result.orderId,
    total: result.total,
    items_count: result.items.length,
  });
} catch (error) {
  track("checkout_failed", {
    error_message: error.message,
    step: "payment",
  });
}
```

### Step 3: Common Event Patterns

**Page/Screen Events:**
```typescript
// Automatically tracked with PageViewTracker, but for custom:
track("screen_viewed", {
  screen_name: "pricing",
  referrer: document.referrer,
});
```

**User Actions:**
```typescript
track("button_clicked", { button_name, location });
track("link_clicked", { link_url, link_text });
track("tab_switched", { from_tab, to_tab });
track("modal_opened", { modal_name });
track("modal_closed", { modal_name, time_open_seconds });
```

**Forms:**
```typescript
track("form_started", { form_name });
track("form_field_focused", { form_name, field_name });
track("form_field_completed", { form_name, field_name });
track("form_submitted", { form_name, fields_count });
track("form_error", { form_name, error_field, error_message });
```

**E-commerce:**
```typescript
track("product_viewed", { product_id, product_name, price, category });
track("product_added_to_cart", { product_id, quantity, price });
track("cart_viewed", { items_count, cart_total });
track("checkout_started", { items_count, cart_total });
track("checkout_completed", { order_id, total, payment_method });
```

**Authentication:**
```typescript
track("signup_started", { method: "email" });
track("signup_completed", { method: "email" });
track("login_attempted", { method: "google" });
track("login_succeeded", { method: "google" });
track("login_failed", { method: "google", error_type });
track("logout", {});
```

**Feature Usage:**
```typescript
track("feature_used", { feature_name, context });
track("search_performed", { query, results_count });
track("filter_applied", { filter_type, filter_value });
track("sort_changed", { sort_by, sort_order });
track("export_requested", { format, items_count });
```

**Engagement:**
```typescript
track("content_shared", { content_type, platform });
track("feedback_submitted", { rating, category });
track("help_requested", { topic, source });
```

### Step 4: Best Practices

**Naming Conventions:**
- Use `snake_case` for event names
- Use past tense for completed actions: `button_clicked`, not `button_click`
- Be specific: `signup_button_clicked` vs generic `button_clicked`
- Use consistent prefixes: `checkout_*`, `settings_*`, `onboarding_*`

**Property Guidelines:**
- Include IDs for entities: `product_id`, `user_id`
- Include context: `location`, `source`, `variant`
- Include relevant metadata: `price`, `quantity`, `duration`
- Avoid PII: no emails, names, addresses in properties

**Tracking Plan Template:**
```typescript
// src/lib/analytics/events.ts
export const EVENTS = {
  // Authentication
  SIGNUP_STARTED: "signup_started",
  SIGNUP_COMPLETED: "signup_completed",
  LOGIN_SUCCEEDED: "login_succeeded",

  // Core Actions
  PROJECT_CREATED: "project_created",
  PROJECT_DELETED: "project_deleted",

  // Engagement
  FEATURE_USED: "feature_used",
  UPGRADE_CLICKED: "upgrade_clicked",
} as const;

// Type-safe tracking
type EventName = typeof EVENTS[keyof typeof EVENTS];
```

## Output
- The tracking code to add
- Where to add it in the codebase
- Suggested properties to include
- Any related events to consider

## Notes
- Track meaningful actions, not every click
- Group related events with prefixes
- Document your tracking plan
- Test events in development first
- Consider GDPR/privacy compliance
