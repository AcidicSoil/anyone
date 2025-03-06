/**
 * Dashboard Page
 * 
 * Main user dashboard with:
 * - Repository upload
 * - Analysis progress
 * - Results display
 * 
 * File path: src/app/dashboard/page.tsx
 */

'use client';

import { useState } from 'react';
import { RepositoryUpload } from '@/components/features/repository/RepositoryUpload';
import { AnalysisProgress } from '@/components/features/analysis/AnalysisProgress';
import { ResultsDashboard } from '@/components/features/results/ResultsDashboard';
import { IntegrationGuide } from '@/components/features/integration/IntegrationGuide';
import { Repository, AnalysisResult } from '@/lib/types/repository';

enum DashboardState {
  UPLOAD,
  ANALYZING,
  RESULTS,
  INTEGRATION
}

export default function DashboardPage() {
  const [state, setState] = useState<DashboardState>(DashboardState.UPLOAD);
  const [repository, setRepository] = useState<Repository | null>(null);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult | null>(null);

  // Handle repository upload completion
  const handleUploadComplete = (repo: Repository) => {
    setRepository(repo);
    setState(DashboardState.ANALYZING);
  };

  // Handle analysis cancellation
  const handleAnalysisCancel = () => {
    setState(DashboardState.UPLOAD);
  };

  // Handle analysis completion
  const handleAnalysisComplete = (results: AnalysisResult) => {
    setAnalysisResults(results);
    setState(DashboardState.RESULTS);
  };

  // Handle integration guide generation
  const handleGenerateGuide = () => {
    setState(DashboardState.INTEGRATION);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Repository Analysis Dashboard</h1>
      
      {state === DashboardState.UPLOAD && (
        <RepositoryUpload onUploadComplete={handleUploadComplete} />
      )}
      
      {state === DashboardState.ANALYZING && repository && (
        <AnalysisProgress 
          repositoryId={repository.id}
          onAnalysisComplete={handleAnalysisComplete}
          onCancel={handleAnalysisCancel}
        />
      )}
      
      {state === DashboardState.RESULTS && analysisResults && (
        <ResultsDashboard 
          results={analysisResults}
          onGenerateGuide={handleGenerateGuide}
        />
      )}
      
      {state === DashboardState.INTEGRATION && repository && analysisResults && (
        <IntegrationGuide 
          repositoryId={repository.id}
          analysisResults={analysisResults}
        />
      )}
    </div>
  );
} 