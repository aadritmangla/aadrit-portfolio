-- ==========================================
-- Supabase Schema Setup for Aadrit Mangla Portfolio
-- Copy and paste this script into your Supabase SQL Editor (Dashboard > SQL Editor)
-- ==========================================

-- 1. Create inquiries table to store contact requests
create table if not exists inquiries (
  id bigint generated always as identity primary key,
  name text not null,
  agency text,
  email text not null,
  phone text,
  "projectType" text not null,
  message text not null,
  "createdAt" bigint not null
);

-- 2. Create settings table for global CMS or parameters
create table if not exists settings (
  id bigint generated always as identity primary key,
  key text not null unique,
  value jsonb not null
);

-- 3. Populate default Instagram DP setting template
insert into settings (key, value)
values (
  'instagram',
  '{"url": null}'
)
on conflict (key) do update
set value = excluded.value;

-- Enable Row Level Security (RLS) if desired, or disable it for rapid public access/backend inserts
-- By default, backend service_role connections bypass RLS, so writing via Express backend is always secure.
alter table inquiries enable row level security;
alter table settings enable row level security;

-- Create policies if any public operations are supported directly (not needed if service_role is used on Backend)
