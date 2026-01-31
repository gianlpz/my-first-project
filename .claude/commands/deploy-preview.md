# Deploy Preview

Create Vercel preview deployments.

## Usage
```
/deploy-preview [branch]
```

## Arguments
- `branch` (optional): Branch to deploy (defaults to current branch)

## Instructions

You are creating a Vercel preview deployment. Follow these steps:

### Step 1: Check Prerequisites
Verify the project is set up with Vercel:

```bash
# Check if Vercel CLI is installed
vercel --version

# Check if project is linked
cat .vercel/project.json
```

If not linked:
```bash
vercel link
```

### Step 2: Check Current State
```bash
# Check current branch
git branch --show-current

# Check for uncommitted changes
git status

# Check if branch is pushed
git log origin/$(git branch --show-current)..HEAD
```

### Step 3: Deploy Preview
```bash
# Deploy current state as preview
vercel

# Or deploy specific branch
git checkout [branch]
vercel
```

The CLI will output:
- Deployment URL (preview)
- Inspect URL (build logs)

### Step 4: Monitor Deployment
```bash
# Get deployment status
vercel inspect [deployment-url]

# Watch build logs
vercel logs [deployment-url] --follow
```

### Step 5: Report Results
Provide:
- Preview URL
- Deployment status
- Any build warnings/errors
- Time to deploy

## Alternative: GitHub Integration
If using Vercel's GitHub integration:
1. Push branch to GitHub
2. Vercel automatically creates preview deployment
3. Check PR for deployment comment

```bash
# Push current branch
git push -u origin $(git branch --show-current)

# View deployments via CLI
vercel list
```

## Environment Variables
For preview deployments that need specific env vars:

```bash
# Set preview-specific environment variable
vercel env add NEXT_PUBLIC_API_URL preview

# Pull env vars locally
vercel env pull .env.local
```

## Deployment Options
```bash
# Deploy without prompts
vercel --yes

# Deploy with specific env
vercel --env DATABASE_URL=xxx

# Deploy and get JSON output
vercel --json

# Deploy specific directory
vercel ./out
```

## Output
- Preview deployment URL
- Build status
- Any errors or warnings
- Comparison with production (if applicable)

## Common Issues

**Build Fails:**
- Check `vercel logs [url]` for details
- Verify environment variables are set
- Check Node.js version matches

**Environment Variables Missing:**
- Run `vercel env pull` to sync
- Check Vercel dashboard for configured vars

**Branch Not Deploying:**
- Ensure branch is pushed to remote
- Check Vercel GitHub integration settings

## Notes
- Preview deployments are temporary
- Each push to a PR creates a new preview
- Preview URLs include a unique hash
- Use `vercel --prod` for production (with caution)
