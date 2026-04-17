# HelpFlow ITIL Desk

Angular application for building an ITIL-style help desk interface and workflows.

## Tech Stack

- Angular 21
- TypeScript 5.9
- Angular Material + CDK
- Tailwind CSS 4 (available in the project)
- Vitest (via `ng test`)

## Prerequisites

- Node.js 20+
- npm 10+

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm start
```

3. Open:

```text
http://localhost:4200
```

## Available Scripts

- Start local development server:

```bash
npm start
```

- Build production bundle:

```bash
npm run build
```

## Project Structure

```text
src/
	app/
		core/           # Core services/singletons
		features/       # Feature modules/pages
		shared/         # Reusable UI components (e.g. stat-card)
		models/         # Shared interfaces/types
		guards/         # Route guards
		interceptors/   # HTTP interceptors
		constants/      # App constants
```
