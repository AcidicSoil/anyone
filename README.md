# anyone - Repository Analysis & Ollama Integration Platform

Making repository analysis and Ollama integration accessible to everyone, regardless of experience level.

## Overview

anyone is a user-friendly web application designed to simplify the process of analyzing repositories and integrating them with Ollama. Our platform emphasizes accessibility, clear visual feedback, and guided user experiences to make technical processes approachable for users of all skill levels.

## Features

- **Repository Analysis**
  - Multi-method repository upload (drag-and-drop, URL, GitHub)
  - Real-time analysis progress tracking
  - Comprehensive compatibility scoring

- **Results Dashboard**
  - Overall compatibility score
  - Category-based analysis breakdown
  - Required changes list with difficulty indicators

- **Integration Guide**
  - Step-by-step implementation instructions
  - Interactive progress tracking
  - Code snippet examples

## Tech Stack

- **Frontend**
  - Next.js 14+
  - TypeScript
  - TailwindCSS
  - Shadcn/UI

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/anyone.git
   cd anyone
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Start the development server
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                  # Next.js app router
├── components/           # React components
│   ├── features/         # Feature-specific components
│   ├── layout/           # Layout components
│   └── ui/               # UI components (shadcn/ui)
├── lib/                  # Utility functions and services
│   ├── services/         # Service functions
│   └── types/            # TypeScript type definitions
└── styles/               # Global styles
```

## Development

### Design System

Our design system emphasizes accessibility and user-friendliness. Key components:

- Color Palette:
  - Primary: Blue (#2563eb)
  - Success: Green (#22c55e)
  - Warning: Amber (#f59e0b)
  - Error: Red (#ef4444)

- Typography:
  - Headings: Inter
  - Body: System UI
  - Code: JetBrains Mono

### Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/AcidicSoil/anyone?labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit%20Reviews)