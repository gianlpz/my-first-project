# Review PR

Review pull requests with detailed feedback.

## Usage
```
/review-pr <pr-number-or-url>
```

## Arguments
- `pr-number-or-url`: PR number (e.g., `123`) or full GitHub URL

## Instructions

You are reviewing a pull request. Follow these steps:

### Step 1: Fetch PR Information
```bash
# Get PR details
gh pr view [pr-number] --json title,body,author,baseRefName,headRefName,files,additions,deletions,changedFiles

# Get PR diff
gh pr diff [pr-number]

# List changed files
gh pr view [pr-number] --json files --jq '.files[].path'
```

### Step 2: Analyze the Changes
Review the diff and understand:
- What is the purpose of this PR?
- What files are changed?
- Is the scope appropriate?

### Step 3: Check Code Quality

**For each changed file, evaluate:**

1. **Correctness**
   - Does the code do what it's supposed to?
   - Are there edge cases not handled?
   - Any potential bugs or errors?

2. **Security**
   - Input validation present?
   - No sensitive data exposed?
   - SQL injection / XSS risks?
   - Proper authentication/authorization?

3. **Performance**
   - Any obvious performance issues?
   - Unnecessary re-renders (React)?
   - N+1 queries?
   - Large bundle impacts?

4. **Maintainability**
   - Is the code readable?
   - Good naming conventions?
   - Appropriate comments?
   - DRY principles followed?

5. **Testing**
   - Are changes tested?
   - Test coverage adequate?
   - Edge cases covered?

6. **Types (TypeScript)**
   - Proper type definitions?
   - No `any` types without justification?
   - Types match runtime behavior?

### Step 4: Format Review Comments

**Overall Summary:**
```markdown
## PR Review: #[number] - [title]

### Summary
[Brief description of what this PR does]

### Overall Assessment
[APPROVE / REQUEST CHANGES / COMMENT]

### Highlights
- ✅ [Good things about the PR]
- ✅ [Another positive]

### Concerns
- ⚠️ [Issue that should be addressed]
- ⚠️ [Another concern]

### Suggestions
- 💡 [Optional improvement]
- 💡 [Another suggestion]
```

**Line-specific Comments:**
```markdown
### File: `src/components/Button.tsx`

**Line 25:** Consider using `useMemo` here to prevent unnecessary recalculations:
\`\`\`tsx
const computedValue = useMemo(() => expensiveCalc(props), [props]);
\`\`\`

**Line 42-48:** This conditional logic is complex. Consider extracting to a named function for clarity.
```

### Step 5: Submit Review (Optional)
If requested, submit the review via CLI:

```bash
# Approve
gh pr review [pr-number] --approve --body "LGTM! [comments]"

# Request changes
gh pr review [pr-number] --request-changes --body "[feedback]"

# Comment only
gh pr review [pr-number] --comment --body "[feedback]"
```

## Review Checklist
- [ ] PR description clearly explains the changes
- [ ] Code follows project conventions
- [ ] No obvious bugs or errors
- [ ] Security considerations addressed
- [ ] Performance is acceptable
- [ ] Types are correct (TypeScript)
- [ ] Tests added/updated if needed
- [ ] No unnecessary changes (scope creep)
- [ ] Documentation updated if needed

## Output
- Summary of the PR
- Assessment (Approve/Request Changes/Comment)
- Detailed feedback with file/line references
- Actionable suggestions

## Notes
- Be constructive and specific
- Distinguish between blocking issues and suggestions
- Acknowledge good practices
- Consider the author's experience level
- Ask questions when intent is unclear
