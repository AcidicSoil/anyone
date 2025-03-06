/**
 * About Page
 * 
 * Provides information about the platform:
 * - Mission and vision
 * - Team information
 * - Technology stack
 * 
 * File path: src/app/about/page.tsx
 */

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About anyone</h1>
        
        <section className="mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              At anyone, our mission is to make repository analysis and Ollama integration 
              accessible to everyone, regardless of experience level. We believe that powerful 
              AI tools should be available to all developers, not just those with specialized knowledge.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We're building a platform that simplifies the process of analyzing repositories and 
              integrating them with Ollama, providing clear visual feedback and guided user experiences 
              to make technical processes approachable for users of all skill levels.
            </p>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Next.js 14+ (React framework)</li>
                <li>TypeScript (Type safety)</li>
                <li>TailwindCSS (Styling)</li>
                <li>Shadcn/UI (Component library)</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Analysis Engine</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Repository parsing algorithms</li>
                <li>Dependency analysis</li>
                <li>Compatibility scoring</li>
                <li>Integration guide generation</li>
              </ul>
            </Card>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team member cards would go here */}
            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-600 dark:text-gray-400">CTO</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Alex Johnson</h3>
              <p className="text-gray-600 dark:text-gray-400">Lead Developer</p>
            </Card>
          </div>
        </section>
        
        <section>
          <Card className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try our platform today and see how easy it is to analyze your repository 
              and integrate with Ollama.
            </p>
            <Button asChild>
              <Link href="/dashboard">
                Try It Now
              </Link>
            </Button>
          </Card>
        </section>
      </div>
    </main>
  );
} 