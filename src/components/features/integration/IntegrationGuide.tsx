/**
 * Integration Guide Component
 * 
 * Provides step-by-step instructions for Ollama integration:
 * - Implementation instructions
 * - Interactive progress tracking
 * - Code snippet examples
 * 
 * File path: src/components/features/integration/IntegrationGuide.tsx
 */

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

// TODO: Import types from models
interface IntegrationStep {
  id: string;
  title: string;
  description: string;
  codeSnippet?: string;
  completed: boolean;
}

interface IntegrationGuideProps {
  repositoryId: string;
  analysisResults: any;
}

export function IntegrationGuide({ repositoryId, analysisResults }: IntegrationGuideProps) {
  // TODO: Fetch actual integration steps based on analysis results
  const [steps, setSteps] = useState<IntegrationStep[]>([
    {
      id: '1',
      title: 'Install Ollama',
      description: 'Install Ollama on your system following the official documentation.',
      completed: false
    },
    {
      id: '2',
      title: 'Configure Environment',
      description: 'Set up the necessary environment variables for Ollama integration.',
      codeSnippet: 'export OLLAMA_API_HOST=http://localhost:11434',
      completed: false
    },
    {
      id: '3',
      title: 'Add Dependencies',
      description: 'Add the required dependencies to your project.',
      codeSnippet: 'npm install ollama-js\n# or\nyarn add ollama-js',
      completed: false
    },
    {
      id: '4',
      title: 'Initialize Ollama Client',
      description: 'Create and configure the Ollama client in your application.',
      codeSnippet: 'import { Ollama } from "ollama-js";\n\nconst ollama = new Ollama();',
      completed: false
    },
    {
      id: '5',
      title: 'Implement API Calls',
      description: 'Implement the necessary API calls to interact with Ollama.',
      codeSnippet: 'const response = await ollama.chat({\n  model: "llama3",\n  messages: [{ role: "user", content: "Hello, world!" }]\n});',
      completed: false
    }
  ]);

  // Calculate progress percentage
  const completedSteps = steps.filter(step => step.completed).length;
  const progressPercentage = (completedSteps / steps.length) * 100;

  // Toggle step completion
  const toggleStepCompletion = (stepId: string) => {
    setSteps(steps.map(step => 
      step.id === stepId ? { ...step, completed: !step.completed } : step
    ));
  };

  // TODO: Implement guide export functionality
  const handleExportGuide = () => {
    // Export guide logic will go here
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Integration Guide</h2>
      
      <div className="mb-6">
        <Progress value={progressPercentage} className="h-2" />
        <p className="mt-2 text-sm text-gray-500">
          {completedSteps} of {steps.length} steps completed
        </p>
      </div>
      
      <div className="space-y-6 mb-8">
        {steps.map(step => (
          <div key={step.id} className="border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Checkbox 
                id={`step-${step.id}`}
                checked={step.completed}
                onCheckedChange={() => toggleStepCompletion(step.id)}
              />
              <div className="flex-1">
                <label 
                  htmlFor={`step-${step.id}`}
                  className={`font-medium ${step.completed ? 'line-through text-gray-500' : ''}`}
                >
                  {step.title}
                </label>
                <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                
                {step.codeSnippet && (
                  <pre className="mt-3 bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                    <code>{step.codeSnippet}</code>
                  </pre>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleExportGuide}>
          Export Guide
        </Button>
        <Button disabled={progressPercentage < 100}>
          Complete Integration
        </Button>
      </div>
    </Card>
  );
} 