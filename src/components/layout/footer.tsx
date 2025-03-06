/**
 * Footer Component
 * 
 * Main application footer with:
 * - Copyright information
 * - Links to important pages
 * - Social media links
 * 
 * File path: src/components/layout/Footer.tsx
 */

import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">anyone</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Making repository analysis and Ollama integration accessible to everyone, 
              regardless of experience level.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} anyone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 