/**
 * @file src/components/features/welcome/action-buttons.tsx
 * Card-style action buttons with hover reveal effects using CSS Grid
 */

"use client"

import { Button } from "@/components/ui/button"
import { Github, FolderUp, FileCode, Globe, BookOpen, Zap } from "lucide-react"
import React, { useEffect, useState } from "react"
import Link from "next/link"

const allActions = [
  {
    title: "Import GitHub Repo",
    description: "Analyze any public GitHub repository",
    icon: Github,
    gradient: "from-green-500/10 to-green-500/5",
    hoverGradient: "from-green-500/20 to-green-500/10",
    textColor: "text-green-500",
    bgColor: "bg-green-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]",
    bgColor2: "bg-green-900/10"
  },
  {
    title: "Upload Local Folder",
    description: "Analyze your local codebase",
    icon: FolderUp,
    gradient: "from-blue-500/10 to-blue-500/5",
    hoverGradient: "from-blue-500/20 to-blue-500/10",
    textColor: "text-blue-500",
    bgColor: "bg-blue-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
    bgColor2: "bg-blue-900/10"
  },
  {
    title: "Paste Code Snippet",
    description: "Quick analysis of code snippets",
    icon: FileCode,
    gradient: "from-purple-500/10 to-purple-500/5",
    hoverGradient: "from-purple-500/20 to-purple-500/10",
    textColor: "text-purple-500",
    bgColor: "bg-purple-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
    bgColor2: "bg-purple-900/10"
  },
  {
    title: "Import from URL",
    description: "Analyze code from any public URL",
    icon: Globe,
    gradient: "from-orange-500/10 to-orange-500/5",
    hoverGradient: "from-orange-500/20 to-orange-500/10",
    textColor: "text-orange-500",
    bgColor: "bg-orange-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]",
    bgColor2: "bg-orange-900/10"
  },
  {
    title: "View Documentation",
    description: "Learn how to use the platform",
    icon: BookOpen,
    gradient: "from-yellow-500/10 to-yellow-500/5",
    hoverGradient: "from-yellow-500/20 to-yellow-500/10",
    textColor: "text-yellow-500",
    bgColor: "bg-yellow-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]",
    bgColor2: "bg-yellow-900/10"
  },
  {
    title: "Quick Start",
    description: "Try with example repository",
    icon: Zap,
    gradient: "from-pink-500/10 to-pink-500/5",
    hoverGradient: "from-pink-500/20 to-pink-500/10",
    textColor: "text-pink-500",
    bgColor: "bg-pink-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]",
    bgColor2: "bg-pink-900/10"
  }
]

export function ActionButtons() {
  // Track which card is hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Use client-side only rendering for the grid layout to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Default grid template for server-side rendering
  const defaultGridTemplate = allActions.map(() => '180px').join(' ');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 overflow-hidden">
      {/* Showcase Section */}
      <div className="relative">
        <div className="absolute inset-x-0 -top-40 h-[200px] bg-gradient-to-b from-background via-background to-transparent" />
        
        <div className="relative flex flex-col items-center">
          {/* CSS Grid container for action buttons */}
          <div 
            className="relative w-full max-w-7xl grid transition-all duration-300 ease-in-out"
            style={{
              gridTemplateColumns: isMounted && hoveredIndex !== null 
                ? allActions.map((_, i) => i === hoveredIndex ? '1fr' : '140px').join(' ') 
                : defaultGridTemplate,
              gap: '12px',
            }}
          >
            {allActions.map((action, index) => {
              const Icon = action.icon
              const isHovered = hoveredIndex === index
              
              return (
                <div
                  key={action.title}
                  className={`group relative transition-all duration-300 ease-in-out ${
                    isHovered ? 'z-10' : 'z-0'
                  }`}
                  style={{
                    gridColumn: `${index + 1} / span 1`,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(index)}
                  onBlur={() => setHoveredIndex(null)}
                >
                  <div 
                    className={`relative w-full p-4 flex flex-col items-start gap-4 rounded-2xl
                      ${action.bgColor} backdrop-blur-sm transition-all duration-300
                      border border-white/5 ${action.glowColor}
                      h-[180px] overflow-hidden`}
                  >
                    {/* Background pattern using CSS gradients instead of SVG */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/0" />
                      <div 
                        className={`absolute inset-0 bg-gradient-radial from-transparent to-${action.bgColor2} opacity-30 group-hover:opacity-60 transition-opacity duration-300`}
                      />
                    </div>
                    
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    {/* Header with icon */}
                    <div className="flex items-center w-full gap-3 z-10">
                      <div 
                        className={`relative flex items-center justify-center h-16 w-16 min-w-16 rounded-xl overflow-hidden
                          ${action.bgColor} ${action.textColor} transition-all duration-300 group-hover:scale-110`}
                      >
                        <Icon className={`w-8 h-8 transition-all duration-300 
                          group-hover:scale-125 group-hover:rotate-3`} 
                        />
                      </div>
                      
                      <div className="relative flex-1 z-10">
                        <h3 className={`text-lg font-semibold ${action.textColor} line-clamp-2`}>
                          {action.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Description - visible by default with more details on hover */}
                    <div className="relative z-10 flex-1 flex flex-col justify-between">
                      <p className={`text-sm text-gray-400 transition-all duration-300 line-clamp-2 ${isHovered ? 'text-gray-300' : ''}`}>
                        {action.description}
                      </p>
                      
                      {/* Action button - only visible on hover */}
                      {isMounted && (
                        <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className={`mt-2 ${action.textColor} border border-current/20 hover:bg-current/10`}
                            asChild
                          >
                            <Link href="/dashboard">
                              Get Started
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Get Started Text */}
      <div className="text-center mt-32 mb-16">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
          Get Started
        </h2>
      </div>
    </div>
  )
} 