# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS portfolio website for a UX Designer. No build system or package manager is required.

## Viewing the Site

Open HTML files directly in a browser:
```bash
open index.html
open glassbank.html
```

## Deploying

Use the custom skills for Vercel deployments:
- `/deploy-preview` - Create a preview deployment
- `/deploy-status` - Check deployment status

Requires Vercel CLI (`npm i -g vercel`) and project linking (`vercel link`).

## Architecture

```
index.html        # Main portfolio page (hero, about, skills, projects, background, contact)
glassbank.html    # GlassBank case study page
style.css         # All styles for both pages (shared)
```

### Design System (in CSS)

- **Colors**: Dark theme with `#0a0a0f` background, `#e07b67` accent (coral), `#3d8b8b` primary (teal)
- **Typography**: Inter font family
- **Components**: `.btn`, `.skill-card`, `.project-card`, `.case-section`, `.showcase-block`

### Adding New Case Studies

1. Create `[project-name].html` following `glassbank.html` structure
2. Add project card link in `index.html` projects grid
3. Add project-specific gradient class in `style.css` (e.g., `.project-image-[name]`)

## Placeholder Images

The GlassBank case study uses CSS gradient placeholders (`.mockup-placeholder`, `.screen-placeholder`). Replace with actual images by:
1. Adding images to an `/images` folder
2. Replacing placeholder divs with `<img>` tags or background-image CSS
