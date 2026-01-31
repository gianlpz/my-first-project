# New Component

Generate React components following project patterns.

## Usage
```
/new-component <component-name> [type]
```

## Arguments
- `component-name`: Name for the component (PascalCase)
- `type` (optional): `ui`, `feature`, `layout`, `form`

## Instructions

You are creating a new React component. Follow these steps:

### Step 1: Determine Component Location
Based on the type:
- `ui` → `src/components/ui/`
- `feature` → `src/components/features/`
- `layout` → `src/components/layout/`
- `form` → `src/components/forms/`
- Default → `src/components/`

### Step 2: Create Component File
Use this template structure:

```tsx
// src/components/[type]/ComponentName.tsx
import { cn } from "@/lib/utils";

interface ComponentNameProps {
  className?: string;
  children?: React.ReactNode;
}

export function ComponentName({ className, children }: ComponentNameProps) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}
```

### Step 3: Add Variants (if UI component)
For UI components, use class-variance-authority:

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const componentVariants = cva(
  "base-classes-here",
  {
    variants: {
      variant: {
        default: "default-variant-classes",
        secondary: "secondary-variant-classes",
        outline: "outline-variant-classes",
      },
      size: {
        sm: "small-size-classes",
        md: "medium-size-classes",
        lg: "large-size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface ComponentNameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

export function ComponentName({
  className,
  variant,
  size,
  ...props
}: ComponentNameProps) {
  return (
    <div
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

### Step 4: Export from Index
Add export to the appropriate index file:

```tsx
// src/components/ui/index.ts
export { ComponentName } from "./ComponentName";
```

### Step 5: Create Types (if needed)
If the component has complex types:

```tsx
// src/types/component-name.ts
export interface ComponentNameData {
  // ...
}
```

## Component Templates by Type

### UI Component (Button example)
- Variants for different styles
- Size variants
- Loading state
- Disabled state
- Icon support

### Feature Component
- Self-contained with its own state
- May fetch data
- Business logic included
- Props for customization

### Layout Component
- Accepts children
- Responsive design
- Consistent spacing
- May include navigation

### Form Component
- React Hook Form integration
- Zod validation
- Error display
- Loading/submitting states

## Output
- Created component file path
- Usage example
- Any additional files created (types, tests)

## Notes
- Always use TypeScript
- Use `cn()` utility for class merging
- Forward refs for interactive elements
- Include proper accessibility attributes
- Add JSDoc comments for complex props
