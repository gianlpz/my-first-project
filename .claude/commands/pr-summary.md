# PR Summary

Generate pull request descriptions from commits.

## Usage
```
/pr-summary [base-branch]
```

## Arguments
- `base-branch` (optional): Branch to compare against (defaults to `main`)

## Instructions

You are generating a PR summary. Follow these steps:

### Step 1: Gather Information
```bash
# Get current branch name
git branch --show-current

# Get commits not in base branch
git log main..HEAD --oneline

# Get detailed commit messages
git log main..HEAD --pretty=format:"%h %s%n%b"

# Get changed files
git diff main...HEAD --stat

# Get full diff for context
git diff main...HEAD
```

### Step 2: Analyze Changes
From the commits and diff, identify:
- What feature/fix is being implemented
- Which areas of the codebase are affected
- Any breaking changes
- Dependencies added/removed

### Step 3: Generate PR Description

```markdown
## Summary
[1-2 sentence description of what this PR does]

## Changes
- [Specific change 1]
- [Specific change 2]
- [Specific change 3]

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update
- [ ] Refactoring (no functional changes)

## How to Test
1. [Step 1]
2. [Step 2]
3. [Expected result]

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing tests pass locally
- [ ] I have updated documentation as needed

## Related Issues
Closes #[issue-number]
```

### Step 4: Create PR (Optional)
If requested, create the PR:

```bash
gh pr create \
  --title "[type]: Brief description" \
  --body "[generated description]" \
  --base main \
  --head [current-branch]
```

## PR Title Conventions
Use conventional commit style:
- `feat: Add user authentication`
- `fix: Resolve login redirect issue`
- `refactor: Simplify API error handling`
- `docs: Update README with setup instructions`
- `test: Add unit tests for user service`
- `chore: Update dependencies`

## Tips for Good PR Descriptions

**Do:**
- Explain the "why" not just the "what"
- Link to related issues or discussions
- Include testing instructions
- Note any deployment considerations
- Highlight areas needing careful review

**Don't:**
- Include obvious information from the diff
- Write overly long descriptions
- Forget to update the checklist
- Leave template placeholders

## Analyzing Commits for Summary

**From commit messages, extract:**
- Main purpose (feature, fix, refactor)
- Components/files affected
- Any noted breaking changes
- Related issue numbers

**From the diff, identify:**
- New files added
- Files deleted
- Significant changes to existing files
- New dependencies
- Configuration changes

## Output
- Generated PR title
- Full PR description in markdown
- Optionally: command to create the PR

## Notes
- Keep summary concise but complete
- Match the team's PR conventions
- Include relevant context for reviewers
- Tag appropriate reviewers if known
