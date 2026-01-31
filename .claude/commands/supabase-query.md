# Supabase Query

Help write and test Supabase queries.

## Usage
```
/supabase-query <description>
```

## Arguments
- `description`: What data you want to query (e.g., "get all posts by user with comments count")

## Instructions

You are helping write Supabase queries. Follow these steps:

### Step 1: Understand the Query
Parse the description to understand:
- Which table(s) to query
- What columns to select
- Any filters (where clauses)
- Joins or relations
- Ordering and pagination
- Aggregations

### Step 2: Write the Query
Generate the Supabase client query:

**Basic Select:**
```typescript
const { data, error } = await supabase
  .from("posts")
  .select("*");
```

**Select Specific Columns:**
```typescript
const { data, error } = await supabase
  .from("posts")
  .select("id, title, created_at");
```

**With Filters:**
```typescript
const { data, error } = await supabase
  .from("posts")
  .select("*")
  .eq("status", "published")
  .gte("created_at", "2024-01-01")
  .order("created_at", { ascending: false });
```

**With Relations (Foreign Tables):**
```typescript
const { data, error } = await supabase
  .from("posts")
  .select(`
    id,
    title,
    author:users(id, name, avatar_url),
    comments(id, content, created_at)
  `);
```

**With Count:**
```typescript
const { data, error, count } = await supabase
  .from("posts")
  .select("*", { count: "exact" })
  .eq("user_id", userId);
```

**Pagination:**
```typescript
const pageSize = 10;
const page = 1;

const { data, error } = await supabase
  .from("posts")
  .select("*")
  .range((page - 1) * pageSize, page * pageSize - 1)
  .order("created_at", { ascending: false });
```

**Full-Text Search:**
```typescript
const { data, error } = await supabase
  .from("posts")
  .select("*")
  .textSearch("title", query, {
    type: "websearch",
    config: "english",
  });
```

**Insert:**
```typescript
const { data, error } = await supabase
  .from("posts")
  .insert({
    title: "New Post",
    content: "Post content",
    user_id: userId,
  })
  .select()
  .single();
```

**Upsert:**
```typescript
const { data, error } = await supabase
  .from("posts")
  .upsert({
    id: existingId, // Will update if exists
    title: "Updated Title",
  })
  .select()
  .single();
```

**Update:**
```typescript
const { data, error } = await supabase
  .from("posts")
  .update({ title: "New Title" })
  .eq("id", postId)
  .select()
  .single();
```

**Delete:**
```typescript
const { error } = await supabase
  .from("posts")
  .delete()
  .eq("id", postId);
```

### Step 3: Add TypeScript Types
```typescript
import { Database } from "@/types/database";

type Post = Database["public"]["Tables"]["posts"]["Row"];

const { data, error } = await supabase
  .from("posts")
  .select("*")
  .returns<Post[]>();
```

### Step 4: Handle Errors
```typescript
const { data, error } = await supabase
  .from("posts")
  .select("*");

if (error) {
  console.error("Query error:", error.message);
  throw new Error(`Failed to fetch posts: ${error.message}`);
}

return data;
```

## Common Filter Methods
- `.eq(column, value)` - Equals
- `.neq(column, value)` - Not equals
- `.gt(column, value)` - Greater than
- `.gte(column, value)` - Greater than or equal
- `.lt(column, value)` - Less than
- `.lte(column, value)` - Less than or equal
- `.like(column, pattern)` - LIKE (use % for wildcards)
- `.ilike(column, pattern)` - Case-insensitive LIKE
- `.is(column, value)` - IS (for null checks)
- `.in(column, [values])` - IN array
- `.contains(column, value)` - Array contains
- `.containedBy(column, value)` - Array contained by
- `.or(filters)` - OR conditions

## Output
- The complete query code
- TypeScript types if applicable
- Example response shape
- Performance notes if relevant

## Notes
- Always handle errors
- Use `.single()` when expecting one row
- Use `.maybeSingle()` when row might not exist
- Add proper indexes for filtered columns
- Consider RLS policies when debugging
