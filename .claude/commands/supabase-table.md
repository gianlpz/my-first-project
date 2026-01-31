# Supabase Table

Generate Supabase tables with TypeScript types.

## Usage
```
/supabase-table <table-name> [columns]
```

## Arguments
- `table-name`: Name for the table (snake_case)
- `columns` (optional): Column definitions or description

## Instructions

You are creating a Supabase table. Follow these steps:

### Step 1: Design the Table Schema
Based on the table name and requirements, design the schema:

```sql
-- Example: users table
create table public.users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS
alter table public.users enable row level security;
```

### Step 2: Create Migration File
Create a new migration:

```bash
# Using Supabase CLI
supabase migration new create_[table_name]_table
```

Write the migration in `supabase/migrations/[timestamp]_create_[table_name]_table.sql`:

```sql
-- Create table
create table if not exists public.[table_name] (
  id uuid primary key default gen_random_uuid(),
  -- columns here
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Enable Row Level Security
alter table public.[table_name] enable row level security;

-- Create updated_at trigger
create trigger handle_updated_at
  before update on public.[table_name]
  for each row
  execute function moddatetime(updated_at);

-- RLS Policies
create policy "Users can view own data"
  on public.[table_name]
  for select
  using (auth.uid() = user_id);

create policy "Users can insert own data"
  on public.[table_name]
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update own data"
  on public.[table_name]
  for update
  using (auth.uid() = user_id);

-- Indexes
create index if not exists [table_name]_user_id_idx
  on public.[table_name](user_id);
```

### Step 3: Generate TypeScript Types
Create types based on the schema:

```typescript
// src/types/database.ts
export interface Database {
  public: {
    Tables: {
      [table_name]: {
        Row: {
          id: string;
          // ... columns
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          // ... columns (optional for those with defaults)
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          // ... all columns optional
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
```

Or use Supabase CLI to generate types:
```bash
supabase gen types typescript --local > src/types/database.ts
```

### Step 4: Create Helper Functions
```typescript
// src/lib/supabase/[table_name].ts
import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/types/database";

type TableName = Database["public"]["Tables"]["[table_name]"];
type Row = TableName["Row"];
type Insert = TableName["Insert"];
type Update = TableName["Update"];

export async function getAll() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("[table_name]")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getById(id: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("[table_name]")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function create(input: Insert) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("[table_name]")
    .insert(input)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function update(id: string, input: Update) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("[table_name]")
    .update(input)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function remove(id: string) {
  const supabase = createClient();
  const { error } = await supabase
    .from("[table_name]")
    .delete()
    .eq("id", id);

  if (error) throw error;
}
```

## Common Column Types
- `uuid` - Primary keys, foreign keys
- `text` - Strings of any length
- `varchar(n)` - Limited length strings
- `int4` / `int8` - Integers
- `numeric` - Precise decimals (money)
- `boolean` - True/false
- `timestamptz` - Timestamps with timezone
- `jsonb` - JSON data
- `text[]` - Array of strings

## Output
- Migration file path
- TypeScript types
- Helper functions
- Example queries

## Notes
- Always enable RLS on tables
- Create appropriate indexes
- Use `timestamptz` not `timestamp`
- Add `created_at` and `updated_at` to all tables
- Use snake_case for column names
