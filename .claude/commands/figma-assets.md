# Figma Assets

Extract icons, images, and other assets from Figma designs.

## Usage
```
/figma-assets <figma-url> [asset-type]
```

## Arguments
- `figma-url`: URL to the Figma file
- `asset-type` (optional): Type of assets to extract (icons, images, all)

## Instructions

You are extracting assets from a Figma design. Follow these steps:

### Step 1: Open Figma in Browser
Use the browser automation tools to:
1. Get the current tab context with `tabs_context_mcp`
2. Create a new tab if needed with `tabs_create_mcp`
3. Navigate to the Figma URL provided: $ARGUMENTS

### Step 2: Navigate to Assets
Once Figma loads:
1. Take a screenshot to understand the file structure
2. Look for the Assets panel or Components section
3. If extracting specific assets, navigate to them in the layers panel

### Step 3: Identify Assets to Export
For each asset type:

**Icons:**
- Look for icon components or frames
- Note their names and sizes
- Check if they're SVG-ready

**Images:**
- Find image fills or image frames
- Note dimensions and aspect ratios
- Identify if they need different resolutions (1x, 2x, 3x)

**Colors:**
- Document color styles used
- Note any gradients or special effects

### Step 4: Export Assets
For each asset:
1. Select the element in Figma
2. Use the export panel (usually bottom right)
3. Choose appropriate format:
   - Icons: SVG (preferred) or PNG
   - Images: PNG, JPG, or WebP
   - Logos: SVG
4. Export at appropriate scales

### Step 5: Save to Project
Save exported assets to appropriate locations:
```
public/
├── icons/          # SVG icons
├── images/         # General images
├── logos/          # Brand logos
└── assets/         # Other assets
```

Or for component-scoped assets:
```
components/
└── ComponentName/
    └── assets/
```

### Step 6: Generate Asset Index (Optional)
Create an index file for easy imports:
```tsx
// components/icons/index.ts
export { ReactComponent as IconName } from './icon-name.svg';
```

## Output
Provide a summary of:
- Assets extracted and their locations
- Any assets that couldn't be exported (and why)
- Suggested usage in code

## Notes
- Prefer SVG for icons and logos (scalable, small file size)
- Use WebP for photos when browser support allows
- Consider creating an icon sprite for many small icons
- Name files consistently (kebab-case recommended)
