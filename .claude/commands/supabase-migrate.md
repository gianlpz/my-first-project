# Supabase Migrate

Create and run Supabase migrations.

## Usage
```
/supabase-migrate <migration-name> [description]
```

## Arguments
- `migration-name`: Name for the migration (e.g., `add_status_to_posts`)
- `description` (optional): What the migration should do

## Instructions

You are creating a Supabase migration. Follow these steps:

### Step 1: Create Migration File
```bash
supabase migration new [migration_name]
```

This creates: `supabase/migrations/[timestamp]_[migration_name].sql`

### Step 2: Write the Migration
Based on the description, generate the appropriate SQL:

**Add Column:**
```sql
alter table public.posts
add column status text default 'draft' not null;

-- Add check constraint
alter table public.posts
add constraint posts_status_check
check (status in ('draft', 'published', 'archived'));

-- Add index if frequently queried
create index posts_status_idx on public.posts(status);
```

**Remove Column:**
```sql
alter table public.posts
drop column if exists old_column;
```

**Rename Column:**
```sql
alter table public.posts
rename column old_name to new_name;
```

**Change Column Type:**
```sql
alter table public.posts
alter column view_count type bigint;
```

**Add Foreign Key:**
```sql
alter table public.posts
add column category_id uuid references public.categories(id);

-- With cascade delete
alter table public.comments
add column post_id uuid references public.posts(id) on delete cascade;
```

**Create Index:**
```sql
-- Basic index
create index posts_user_id_idx on public.posts(user_id);

-- Composite index
create index posts_user_status_idx on public.posts(user_id, status);

-- Unique index
create unique index users_email_idx on public.users(lower(email));

-- Partial index
create index posts_published_idx on public.posts(created_at)
where status = 'published';
```

**Add RLS Policy:**
```sql
-- Enable RLS
alter table public.posts enable row level security;

-- Select policy
create policy "Users can view published posts"
on public.posts for select
using (status = 'published' or auth.uid() = user_id);

-- Insert policy
create policy "Authenticated users can create posts"
on public.posts for insert
to authenticated
with check (auth.uid() = user_id);

-- Update policy
create policy "Users can update own posts"
on public.posts for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- Delete policy
create policy "Users can delete own posts"
on public.posts for delete
using (auth.uid() = user_id);
```

**Create Function:**
```sql
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

-- Create trigger
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
```

**Create View:**
```sql
create or replace view public.posts_with_author as
select
  p.*,
  u.full_name as author_name,
  u.avatar_url as author_avatar
from public.posts p
join public.users u on p.user_id = u.id;
```

### Step 3: Test Locally
```bash
# Reset and apply all migrations
supabase db reset

# Or apply just new migrations
supabase migration up
```

### Step 4: Generate Updated Types
```bash
supabase gen types typescript --local > src/types/database.ts
```

### Step 5: Push to Remote (when ready)
```bash
supabase db push
```

## Migration Best Practices

**Always:**
- Make migrations reversible when possible
- Test locally before pushing
- Back up production data before major changes
- Use transactions for multi-step migrations

**Avoid:**
- Dropping columns with data without backup
- Long-running migrations on large tables
- Breaking changes without a migration plan

## Rollback Template
```sql
-- Migration: add_status_to_posts
-- Up
alter table public.posts add column status text default 'draft';

-- Down (save separately or as comment)
-- alter table public.posts drop column status;
```

## Output
- Migration file path
- SQL content
- Commands to run the migration
- Updated types (if applicable)

## Notes
- Always use `if not exists` / `if exists` for safety
- Add indexes for foreign keys
- Update RLS policies when adding user-scoped columns
- Regenerate types after schema changes
