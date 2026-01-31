# Figma Spec

Quick lookup of design specifications while coding.

## Usage
```
/figma-spec <figma-url> [element-description]
```

## Arguments
- `figma-url`: URL to the Figma file or specific frame
- `element-description` (optional): Description of element to inspect (e.g., "header button", "card shadow")

## Instructions

You are looking up design specifications from Figma. Follow these steps:

### Step 1: Open Figma in Browser
Use the browser automation tools to:
1. Get the current tab context with `tabs_context_mcp`
2. Create a new tab if needed with `tabs_create_mcp`
3. Navigate to the Figma URL provided: $ARGUMENTS

### Step 2: Locate the Element
If an element description was provided:
1. Take a screenshot to see the design
2. Navigate to find the described element
3. Click on it to select it

If no specific element:
1. Show an overview of the current frame/page
2. List the main elements visible

### Step 3: Extract Specifications
For the selected element, extract and report:

**Dimensions:**
- Width and height
- Min/max constraints
- Aspect ratio

**Position:**
- X/Y coordinates relative to parent
- Alignment (left, center, right)
- Distribution if in auto-layout

**Layout:**
- Display type (flex, grid, absolute)
- Direction (row, column)
- Gap between children
- Padding (top, right, bottom, left)

**Colors:**
- Fill colors (with opacity)
- Stroke/border colors
- Gradient definitions if any

**Typography (if text):**
- Font family
- Font size
- Font weight
- Line height
- Letter spacing
- Text alignment
- Text color

**Effects:**
- Box shadows (offset, blur, spread, color)
- Inner shadows
- Blur effects

**Border:**
- Border width
- Border radius (per corner if different)
- Border style

### Step 4: Format Output
Present specs in a developer-friendly format:

```
Element: [Name from Figma]
---------------------------
Dimensions: 320px × 48px
Padding: 12px 16px
Border Radius: 8px
Background: #3B82F6 (blue-500)
Border: 1px solid #2563EB (blue-600)

Typography:
  Font: Inter
  Size: 16px / 1rem
  Weight: 600 (semibold)
  Color: #FFFFFF (white)

Shadow:
  0 4px 6px rgba(0, 0, 0, 0.1)

Tailwind Equivalent:
  px-4 py-3 rounded-lg bg-blue-500 border border-blue-600
  text-base font-semibold text-white shadow-md
```

## Quick Reference Format
For rapid lookups, provide concise one-liners:
```
Button padding: 12px 16px → px-4 py-3
Card radius: 12px → rounded-xl
Heading size: 24px/32px → text-2xl leading-8
```

## Notes
- Always provide Tailwind class equivalents when possible
- Note if values don't match standard Tailwind scale
- Flag any accessibility concerns (contrast, touch targets)
- Mention if element has hover/active/focus states
