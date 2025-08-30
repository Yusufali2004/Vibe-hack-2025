-- Users table
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  username text,
  created_at timestamp default now()
);

-- Posts table
create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  created_at timestamp default now(),
  user_id uuid references users(id)
);

-- Enable Row Level Security
alter table posts enable row level security;

-- Policies
create policy "Allow logged-in users to insert posts" on posts
  for insert using (auth.uid() is not null);

create policy "Allow logged-in users to select posts" on posts
  for select using (auth.uid() is not null);
