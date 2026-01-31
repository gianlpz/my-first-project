# Figma Tokens

Sync design tokens from Figma to your codebase (Tailwind config or CSS variables).

## Usage
```
/figma-tokens <figma-url> [output-format]
```

## Arguments
- `figma-url`: URL to the Figma file with design system/tokens
- `output-format` (optional): `tailwind` (default) or `css-variables`

## Instructions

You are extracting design tokens from Figma. Follow these steps:

### Step 1: Open Figma in Browser
Use the browser automation tools to:
1. Get the current tab context with `tabs_context_mcp`
2. Create a new tab if needed with `tabs_create_mcp`
3. Navigate to the Figma URL provided: $ARGUMENTS

### Step 2: Find Design Tokens
Look for these in the Figma file:
1. **Local Styles panel** - Colors, Text styles, Effects
2. **Variables panel** (if using Figma Variables)
3. **Design system pages** - Often labeled "Tokens", "Styles", or "Foundation"

### Step 3: Extract Token Categories

**Colors:**
- Primary, secondary, accent colors
- Neutral/gray scale
- Semantic colors (success, warning, error, info)
- Background and surface colors
- Text colors

**Typography:**
- Font families
- Font sizes (scale)
- Font weights
- Line heights
- Letter spacing

**Spacing:**
- Spacing scale (4px, 8px, 12px, 16px, etc.)
- Container max-widths
- Common gaps

**Border Radius:**
- Radius scale (sm, md, lg, full)

**Shadows:**
- Elevation levels
- Box shadow values

**Breakpoints:**
- Responsive breakpoints if defined

### Step 4: Generate Output

**For Tailwind (default):**
```js
// tailwind.config.js theme extension
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#...',
          // ...
          900: '#...',
        },
        // ...
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // ...
      },
      fontSize: {
        // custom sizes
      },
      spacing: {
        // custom spacing
      },
      borderRadius: {
        // custom radii
      },
      boxShadow: {
        // custom shadows
      },
    },
  },
};
```

**For CSS Variables:**
```css
/* styles/tokens.css */
:root {
  /* Colors */
  --color-primary-50: #...;
  --color-primary-500: #...;

  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --text-xs: 0.75rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
}
```

### Step 5: Update Project Files
1. Update `tailwind.config.js` or create `tokens.css`
2. Document any tokens that need manual review
3. Note any discrepancies with existing tokens

## Output
Provide:
- Summary of tokens extracted by category
- The generated config/CSS file
- Any tokens that couldn't be mapped
- Suggestions for token naming improvements

## Notes
- Use semantic names when possible (primary vs blue)
- Maintain consistency with Tailwind conventions
- Document color contrast ratios for accessibility
- Consider dark mode token variants
