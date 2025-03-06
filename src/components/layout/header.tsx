/**
 * Header Component
 * 
 * Main application header with:
 * - Logo
 * - Navigation
 * - Theme toggle
 * 
 * File path: src/components/layout/Header.tsx
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/layout/ModeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/75 backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-900/75">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">anyone</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/docs" className="text-sm font-medium">
              Documentation
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button size="sm" asChild>
            <Link href="/dashboard">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 