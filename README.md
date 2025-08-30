# Vibe-hack-2025
Trying vibe coding first time with my friends
# Devnovate Blogging Platform

## Overview
A full-stack blogging platform built for the VIBE HACK 2025 Hackathon. It allows users to sign up, log in, create blogs, and view all blogs. The platform uses **Supabase** as the backend and **React** for the frontend.

## Live Demo
You can preview the app here (hosted on Replit):  
**[Live Replit Preview](https://23739037-9d49-4576-9e4a-3a68fb2e1c4c-00-xzj562rz44y.sisko.replit.dev)**

## Features
- User signup and login (JWT authentication handled by Supabase)
- Create, submit, and view blogs
- Responsive UI (works on desktop and mobile)
- No backend server required — Supabase handles authentication, database, and APIs
- Trending blogs can be sorted manually via the frontend

## Tech Stack
- **Frontend:** React.js
- **Backend:** Supabase (authentication + database)
- **Database:** Supabase Postgres (tables: `users`, `posts`)
- **Libraries:** `@supabase/supabase-js`

## Supabase Details
- **Project URL:** `https://cspbythfiogjevxtodqw.supabase.co`
- **Anon/Public Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzcGJ5dGhmaW9namV2eHRvZHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NDAzNDQsImV4cCI6MjA3MjExNjM0NH0.nBD2JH7p08trC7XZwXyNrLOxTT01d44kYhvx0H6OHVs`

> **Note:** Do not include the anon key in public repositories if you don’t want others to write to your database. You can replace it with `YOUR_ANON_KEY_HERE` in GitHub submissions.

## Project Structure
