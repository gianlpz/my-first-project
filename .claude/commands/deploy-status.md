# Deploy Status

Check Vercel deployment status and logs.

## Usage
```
/deploy-status [deployment-url-or-id]
```

## Arguments
- `deployment-url-or-id` (optional): Specific deployment to check (defaults to latest)

## Instructions

You are checking Vercel deployment status. Follow these steps:

### Step 1: List Recent Deployments
```bash
# List all deployments for the project
vercel list

# List with more details
vercel list --json | head -50
```

Output shows:
- Deployment URL
- State (READY, BUILDING, ERROR, QUEUED)
- Created time
- Branch/commit

### Step 2: Get Deployment Details
```bash
# Inspect specific deployment
vercel inspect [deployment-url]

# Get JSON output for parsing
vercel inspect [deployment-url] --json
```

Details include:
- Build duration
- Functions deployed
- Regions
- Environment

### Step 3: View Build Logs
```bash
# View logs for deployment
vercel logs [deployment-url]

# Follow logs in real-time (for in-progress builds)
vercel logs [deployment-url] --follow

# Get more log lines
vercel logs [deployment-url] --limit 100
```

### Step 4: Check Function Logs (Runtime)
```bash
# View runtime logs (after deployment)
vercel logs [deployment-url] --since 1h

# Filter by function
vercel logs [deployment-url] --filter /api/
```

### Step 5: Compare Deployments
```bash
# List recent deployments to compare
vercel list --limit 5

# Check specific deployment details
vercel inspect [deployment-1]
vercel inspect [deployment-2]
```

## Deployment States

| State | Description |
|-------|-------------|
| QUEUED | Waiting to build |
| BUILDING | Currently building |
| READY | Successfully deployed |
| ERROR | Build or deployment failed |
| CANCELED | Deployment was canceled |

## Checking via Dashboard
If CLI access is limited, check:
1. https://vercel.com/[team]/[project]/deployments
2. Click on specific deployment for:
   - Build logs
   - Function logs
   - Source view
   - Environment variables used

## Report Format
Provide a summary:

```
Deployment Status Report
========================
URL: https://project-abc123.vercel.app
Status: READY ✓
Branch: feature/new-feature
Commit: abc1234 - "Add new feature"
Build Time: 45s
Created: 2024-01-15 10:30:00

Functions:
- /api/users: 256MB, 10s timeout
- /api/posts: 256MB, 10s timeout

Regions: iad1 (US East)

Recent Logs:
[timestamp] GET /api/users 200 45ms
[timestamp] POST /api/posts 201 120ms
```

## Troubleshooting Failed Deployments

**View Error Details:**
```bash
vercel logs [deployment-url] --output raw
```

**Common Issues:**
1. **Build Error** - Check build logs for syntax/import errors
2. **Function Timeout** - Increase timeout in vercel.json
3. **Memory Exceeded** - Optimize function or increase memory
4. **Missing Env Vars** - Check environment configuration

**Redeploy:**
```bash
# Redeploy same commit
vercel --force

# Redeploy with fresh cache
vercel --force --no-cache
```

## Output
- Current deployment status
- Build/runtime logs (relevant portions)
- Any errors or warnings
- Suggestions for issues

## Notes
- Production deployments are marked with a special indicator
- Preview deployments expire after some time
- Logs are retained for limited period
- Use `--debug` flag for verbose CLI output
