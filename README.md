# Torsan Web Application

A full-stack web application built with React, NestJS, and MySQL.

## Project Structure

- `frontend/` - React application with Tailwind CSS
- `backend/` - NestJS API server
- `database/` - MySQL database scripts and migrations

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MySQL Server
- npm or yarn

### Development Setup

1. **Install dependencies:**
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

2. **Set up database:**
   - Create a MySQL database named `torsan_db`
   - Copy `.env.example` to `.env` in the backend folder
   - Update database credentials in `.env`

3. **Start development servers:**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run start:dev

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

4. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, TypeScript
- **Backend:** NestJS, TypeORM, MySQL, TypeScript
- **Database:** MySQL 8.0+