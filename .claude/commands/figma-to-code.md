# Figma to Code

Convert Figma designs to React/Next.js components with Tailwind CSS.

## Usage
```
/figma-to-code <figma-url> [component-name]
```

## Arguments
- `figma-url`: URL to the Figma file or specific frame/component
- `component-name` (optional): Name for the generated component

## Instructions

You are converting a Figma design to a React component. Follow these steps:

### Step 1: Open Figma in Browser
Use the browser automation tools to:
1. Get the current tab context with `tabs_context_mcp`
2. Create a new tab if needed with `tabs_create_mcp`
3. Navigate to the Figma URL provided: $ARGUMENTS

### Step 2: Analyze the Design
Once the Figma page loads:
1. Take a screenshot to see the design
2. Use `read_page` to understand the structure
3. Identify:
   - Layout structure (flex, grid, positioning)
   - Colors (background, text, borders)
   - Typography (font family, size, weight, line height)
   - Spacing (padding, margins, gaps)
   - Components (buttons, inputs, cards, etc.)
   - Images and icons

### Step 3: Extract Design Details
If you can access the Figma inspect panel:
1. Click on elements to see their properties
2. Note exact values for colors, spacing, fonts
3. Identify any design tokens or variables used

### Step 4: Generate React Component
Create a React component with:
- TypeScript support
- Tailwind CSS classes for styling
- Proper semantic HTML structure
- Responsive design considerations
- Accessibility attributes (aria labels, roles)

### Step 5: Output
1. Write the component to the appropriate location in the project
2. If images/icons are needed, note them for `/figma-assets`
3. Provide a summary of the component structure

## Example Output Structure
```tsx
// components/ComponentName.tsx
import React from 'react';

interface ComponentNameProps {
  // props based on design variations
}

export function ComponentName({ ...props }: ComponentNameProps) {
  return (
    // JSX with Tailwind classes
  );
}
```

## Notes
- Prefer Tailwind utility classes over custom CSS
- Use semantic HTML elements (section, article, nav, etc.)
- Include hover/focus states if visible in design
- Add comments for complex layout decisions
