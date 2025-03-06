/**
 * Results Dashboard Component
 * 
 * Displays comprehensive analysis results with:
 * - Overall compatibility score
 * - Category-based analysis breakdown
 * - Required changes list with difficulty indicators
 * 
 * File path: src/components/features/results/ResultsDashboard.tsx
 */

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// TODO: Import types from models
interface AnalysisResult {
  overallScore: number;
  categories: {
    fileChanges: number;
    complexity: number;
    dependencies: number;
    compatibility: number;
  };
  requiredChanges: Array<{
    file: string;
    difficulty: 'easy' | 'medium' | 'hard';
    changes: string[];
    technical_details?: string;
  }>;
}

interface ResultsDashboardProps {
  results: AnalysisResult;
  onGenerateGuide: () => void;
}

export function ResultsDashboard({ results, onGenerateGuide }: ResultsDashboardProps) {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  // TODO: Implement score visualization
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-amber-500';
    return 'text-red-500';
  };

  // TODO: Implement difficulty badge rendering
  const renderDifficultyBadge = (difficulty: 'easy' | 'medium' | 'hard') => {
    switch (difficulty) {
      case 'easy':
        return <Badge className="bg-green-500">Easy</Badge>;
      case 'medium':
        return <Badge className="bg-amber-500">Medium</Badge>;
      case 'hard':
        return <Badge className="bg-red-500">Hard</Badge>;
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Analysis Results</h2>
      
      <div className="mb-8 text-center">
        <div className="text-6xl font-bold mb-2">
          <span className={getScoreColor(results.overallScore)}>
            {results.overallScore}%
          </span>
        </div>
        <p className="text-gray-500">Overall Compatibility Score</p>
      </div>
      
      <Tabs defaultValue="categories">
        <TabsList className="mb-4">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="changes">Required Changes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="categories">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>File Changes</span>
                <span>{results.categories.fileChanges}%</span>
              </div>
              <Progress value={results.categories.fileChanges} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Complexity</span>
                <span>{results.categories.complexity}%</span>
              </div>
              <Progress value={results.categories.complexity} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Dependencies</span>
                <span>{results.categories.dependencies}%</span>
              </div>
              <Progress value={results.categories.dependencies} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Compatibility</span>
                <span>{results.categories.compatibility}%</span>
              </div>
              <Progress value={results.categories.compatibility} className="h-2" />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="changes">
          <div className="space-y-4">
            {results.requiredChanges.map((change, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{change.file}</h3>
                  {renderDifficultyBadge(change.difficulty)}
                </div>
                
                <ul className="list-disc list-inside mb-2">
                  {change.changes.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
                
                {change.technical_details && showTechnicalDetails && (
                  <div className="mt-2 text-sm bg-gray-100 p-2 rounded">
                    {change.technical_details}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-4">
            <Button 
              variant="outline" 
              onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
            >
              {showTechnicalDetails ? 'Hide' : 'Show'} Technical Details
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <Button onClick={onGenerateGuide}>Generate Integration Guide</Button>
      </div>
    </Card>
  );
} 