# AI Content Generator

This project is an AI-powered content generator built using React Next.js 14, integrating various technologies for modern web development.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Configuration](#configuration)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
   - [Authentication](#authentication)
   - [Database](#database)
   - [AI Integration](#ai-integration)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

This project is an AI Content Generator built with React Next.js 14, designed to generate and manage content efficiently using AI capabilities.

## Features

- **Modern UI**: Utilizes Tailwind CSS for responsive and sleek UI components.
- **Authentication**: Implements social and email/password authentication with Clerk.
- **Database**: Uses Drizzle ORM with PostgreSQL for efficient database management.
- **AI Integration**: Integrates Google Gemini API for AI-driven content generation.
- **Templates**: Provides customizable templates for generating AI-driven content.
- **Deployment**: Easily deployable on Cloud platforms like Vercel.

## Technologies Used

- React Next.js 14
- Tailwind CSS
- TypeScript
- Clerk for authentication
- Drizzle ORM with PostgreSQL
- Google Gemini API

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/chiranjiv-d-adsul/AI-Content-Generator-full-stack-project-.git
   cd ai-content-generator
   
2. **Install dependencies:**

   ```bash
   npm install
Configuration
Set up environment variables:

   ```bash
      cp .env.example .env.local
   ```
 Edit .env.local and add necessary configuration
3. **Project Structure**

The project structure follows a standard Next.js application structure:

```
/ 
├── components/         # React components
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles
├── api/                # API routes
├── lib/                # Utility functions
└── README.md           # Project README
```


To start the development server:

```bash
   npm run dev
```
Open http://localhost:3000 to view it in your browser.

4.Authentication
This project uses Clerk for authentication. Ensure you have configured Clerk properly in your environment variables.

5.Database
Drizzle ORM is used to interact with a PostgreSQL database. Set up your PostgreSQL database and configure the connection in .env.local.

6.AI Integration
Google Gemini API is used for AI-driven content generation. Obtain API credentials and configure them in .env.local.

7.Deployment
Deploy your application on Vercel or any cloud platform of your choice. Ensure environment variables are properly configured for production.

8.Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
