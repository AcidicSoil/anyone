/**
 * Repository Types
 * 
 * Type definitions for repository data and analysis
 * 
 * File path: src/lib/types/repository.ts
 */

/**
 * Repository information
 */
export interface Repository {
  id: string;
  name: string;
  description?: string;
  url?: string;
  uploadType: 'file' | 'url' | 'github';
  createdAt: Date;
  status: 'pending' | 'analyzing' | 'completed' | 'failed';
}

/**
 * Analysis result categories
 */
export interface AnalysisCategories {
  fileChanges: number;
  complexity: number;
  dependencies: number;
  compatibility: number;
}

/**
 * Required change for Ollama integration
 */
export interface RequiredChange {
  file: string;
  difficulty: 'easy' | 'medium' | 'hard';
  changes: string[];
  technical_details?: string;
}

/**
 * Complete analysis result
 */
export interface AnalysisResult {
  repositoryId: string;
  overallScore: number;
  categories: AnalysisCategories;
  requiredChanges: RequiredChange[];
  completedAt: Date;
}

/**
 * Integration step
 */
export interface IntegrationStep {
  id: string;
  title: string;
  description: string;
  codeSnippet?: string;
  completed: boolean;
}

/**
 * Integration guide
 */
export interface IntegrationGuide {
  repositoryId: string;
  analysisResultId: string;
  steps: IntegrationStep[];
  progress: number;
} 