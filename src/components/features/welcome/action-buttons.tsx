/**
 * @file src/components/features/welcome/action-buttons.tsx
 * Cascading stack of action buttons with hover reveal effects
 */

"use client"

import { Button } from "@/components/ui/button"
import { motion, useSpring } from "framer-motion"
import { Github, FolderUp, FileCode, Globe, BookOpen, Zap } from "lucide-react"
import React from "react"

const allActions = [
  {
    title: "Import GitHub Repo",
    description: "Analyze any public GitHub repository",
    icon: Github,
    gradient: "from-green-500/10 to-green-500/5",
    hoverGradient: "from-green-500/20 to-green-500/10",
    textColor: "text-green-500",
    bgColor: "bg-green-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]"
  },
  {
    title: "Upload Local Folder",
    description: "Analyze your local codebase",
    icon: FolderUp,
    gradient: "from-blue-500/10 to-blue-500/5",
    hoverGradient: "from-blue-500/20 to-blue-500/10",
    textColor: "text-blue-500",
    bgColor: "bg-blue-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
  },
  {
    title: "Paste Code Snippet",
    description: "Quick analysis of code snippets",
    icon: FileCode,
    gradient: "from-purple-500/10 to-purple-500/5",
    hoverGradient: "from-purple-500/20 to-purple-500/10",
    textColor: "text-purple-500",
    bgColor: "bg-purple-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]"
  },
  {
    title: "Import from URL",
    description: "Analyze code from any public URL",
    icon: Globe,
    gradient: "from-orange-500/10 to-orange-500/5",
    hoverGradient: "from-orange-500/20 to-orange-500/10",
    textColor: "text-orange-500",
    bgColor: "bg-orange-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
  },
  {
    title: "View Documentation",
    description: "Learn how to use the platform",
    icon: BookOpen,
    gradient: "from-yellow-500/10 to-yellow-500/5",
    hoverGradient: "from-yellow-500/20 to-yellow-500/10",
    textColor: "text-yellow-500",
    bgColor: "bg-yellow-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]"
  },
  {
    title: "Quick Start",
    description: "Try with example repository",
    icon: Zap,
    gradient: "from-pink-500/10 to-pink-500/5",
    hoverGradient: "from-pink-500/20 to-pink-500/10",
    textColor: "text-pink-500",
    bgColor: "bg-pink-950/50",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]"
  }
]

export function ActionButtons() {
  const iconWidth = useSpring(64, {
    stiffness: 300,
    damping: 30,
    mass: 2
  })

  // Track which cards are expanded
  const [expandedCards, setExpandedCards] = React.useState<{[key: string]: boolean}>({})
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 overflow-hidden">
      {/* Showcase Section */}
      <div className="relative">
        <motion.div 
          className="absolute inset-x-0 -top-40 h-[200px] bg-gradient-to-b from-background via-background to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-7xl flex justify-start pl-4">
            {allActions.map((action, index) => {
              const Icon = action.icon
              const offset = index * 140 // Even tighter spacing
              const isExpanded = expandedCards[action.title] || false
              const isHovered = hoveredIndex === index
              
              // Dynamic z-index: higher when expanded or when next card is expanded
              const dynamicZIndex = isExpanded ? allActions.length + 1 : 
                                  hoveredIndex === index + 1 ? allActions.length - index - 1 :
                                  allActions.length - index

              return (
                <motion.div
                  key={action.title}
                  className="group absolute"
                  style={{ 
                    left: offset,
                    zIndex: dynamicZIndex,
                    width: '220px'
                  }}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="relative"
                    animate={{ 
                      x: isExpanded ? -100 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onHoverStart={() => {
                      setHoveredIndex(index)
                      setExpandedCards(prev => ({
                        ...prev,
                        [action.title]: !prev[action.title]
                      }))
                    }}
                    onHoverEnd={() => {
                      setHoveredIndex(null)
                    }}
                  >
                    <div 
                      className={`relative w-full p-4 flex items-center gap-4 rounded-2xl
                        ${action.bgColor} backdrop-blur-sm transition-all duration-500
                        border border-white/5 ${action.glowColor}
                        h-[100px] overflow-hidden`}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      
                      <motion.div 
                        className={`relative flex items-center justify-center h-24 rounded-xl overflow-hidden
                          ${action.bgColor} ${action.textColor} transition-colors duration-500`}
                        style={{ width: iconWidth }}
                        onHoverStart={() => iconWidth.set(120)}
                        onHoverEnd={() => iconWidth.set(64)}
                      >
                        <Icon className={`w-12 h-12 transition-all duration-500 
                          group-hover:scale-125 group-hover:rotate-3`} 
                        />
                      </motion.div>
                      
                      <div className="relative flex-1 z-10">
                        <h3 className={`text-lg font-semibold mb-1 ${action.textColor}`}>
                          {action.title}
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500 line-clamp-1">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
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