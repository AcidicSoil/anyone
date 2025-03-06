/**
 * Documentation Page
 * 
 * Provides comprehensive documentation for using the platform:
 * - Getting started guide
 * - API documentation
 * - Integration examples
 * 
 * File path: src/app/docs/page.tsx
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DocsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        
        <Tabs defaultValue="getting-started">
          <TabsList className="mb-8">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>
          
          <TabsContent value="getting-started">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Getting Started with anyone</h2>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-2">1. Upload Your Repository</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Start by uploading your repository using one of the available methods:
                    file upload, Git URL, or GitHub integration.
                  </p>
                  <img 
                    src="/images/docs/upload-placeholder.svg" 
                    alt="Repository Upload" 
                    className="border rounded-lg w-full h-48 bg-gray-100 dark:bg-gray-800 object-cover"
                  />
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold mb-2">2. Analyze Compatibility</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Our system will analyze your repository for Ollama compatibility,
                    providing a comprehensive score and detailed breakdown.
                  </p>
                  <img 
                    src="/images/docs/analysis-placeholder.svg" 
                    alt="Analysis Process" 
                    className="border rounded-lg w-full h-48 bg-gray-100 dark:bg-gray-800 object-cover"
                  />
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold mb-2">3. Follow Integration Guide</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Use the generated integration guide to implement Ollama in your project,
                    with step-by-step instructions and code snippets.
                  </p>
                  <img 
                    src="/images/docs/guide-placeholder.svg" 
                    alt="Integration Guide" 
                    className="border rounded-lg w-full h-48 bg-gray-100 dark:bg-gray-800 object-cover"
                  />
                </section>
              </div>
              
              <div className="mt-8">
                <Button asChild>
                  <Link href="/dashboard">
                    Try It Now
                  </Link>
                </Button>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="api">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">API Reference</h2>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-2">Repository Upload</h3>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                    <code>POST /api/repositories</code>
                  </pre>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Upload a repository for analysis.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold mb-2">Analysis Status</h3>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                    <code>GET /api/repositories/{'{repositoryId}'}/status</code>
                  </pre>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Check the status of an ongoing analysis.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold mb-2">Analysis Results</h3>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                    <code>GET /api/repositories/{'{repositoryId}'}/results</code>
                  </pre>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Retrieve the results of a completed analysis.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold mb-2">Integration Guide</h3>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                    <code>GET /api/repositories/{'{repositoryId}'}/guide</code>
                  </pre>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Generate an integration guide based on analysis results.
                  </p>
                </section>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="examples">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Integration Examples</h2>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-2">Basic Ollama Integration</h3>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                    <code>{`import { Ollama } from "ollama-js";

// Initialize the client
const ollama = new Ollama({
  host: process.env.OLLAMA_HOST || "http://localhost:11434"
});

// Simple text generation
async function generateText(prompt) {
  const response = await ollama.chat({
    model: "llama3",
    messages: [{ role: "user", content: prompt }]
  });
  
  return response.message.content;
}`}</code>
                  </pre>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold mb-2">React Component Example</h3>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                    <code>{`import { useState } from 'react';
import { useOllama } from './hooks/useOllama';

export function AIChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const { generateResponse, isLoading } = useOllama();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await generateResponse(prompt);
    setResponse(result);
    setPrompt('');
  };
  
  return (
    <div className="chat-container">
      <div className="messages">
        {response && <div className="response">{response}</div>}
      </div>
      
      <form onSubmit={handleSubmit}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask something..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !prompt}>
          {isLoading ? 'Generating...' : 'Send'}
        </button>
      </form>
    </div>
  );
}`}</code>
                  </pre>
                </section>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
} 