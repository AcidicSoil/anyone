/**
 * @file src/components/layout/navbar.tsx
 * Main navigation bar with hover animations
 */

"use client"

import { Button } from "@/components/ui/button"
import { motion, useSpring } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import Link from "next/link"
import { Github } from "lucide-react"

export function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const startWidth = isDesktop ? 80 : 100
  const endWidth = isDesktop ? 422 : 432

  const width = useSpring(startWidth, {
    mass: 2,
    friction: 40,
    tension: 600
  })

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Documentation", href: "/docs" },
    { label: "GitHub", href: "https://github.com", icon: Github }
  ]

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl">
          CodeAnalyzer
        </Link>

        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="relative group"
              asChild
            >
              <Link href={item.href}>
                <motion.div
                  className="absolute inset-0 rounded-md bg-gradient-to-br from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100"
                  style={{ width }}
                  onHoverStart={() => width.set(endWidth)}
                  onHoverEnd={() => width.set(startWidth)}
                />
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </span>
              </Link>
            </Button>
          ))}
        </div>
      </nav>
    </motion.header>
  )
} 