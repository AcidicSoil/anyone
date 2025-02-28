/**
 * @file src/components/features/welcome/hero.tsx
 * Hero section component for the welcome screen
 */

"use client"

import { Button } from "@/components/ui/button"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Increase the range for more noticeable movement
  const rotateX = useTransform(mouseY, [-500, 500], [5, -5])
  const rotateY = useTransform(mouseX, [-500, 500], [-5, 5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      // Smoother animation
      animate(mouseX, clientX - centerX, {
        type: "spring",
        stiffness: 50,
        damping: 30,
        mass: 0.5
      })
      animate(mouseY, clientY - centerY, {
        type: "spring",
        stiffness: 50,
        damping: 30,
        mass: 0.5
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Blue gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-background to-background z-0"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 2000,
        }}
      />
      
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-center space-y-8"
          style={{
            rotateX,
            rotateY,
            transformPerspective: 2000,
          }}
        >
          <motion.div
            className="bg-blue-600 p-4 rounded-lg shadow-2xl"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
              Code Analysis Made Simple
            </h1>
          </motion.div>
          <motion.p 
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto bg-blue-500/10 p-4 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Understand any codebase instantly with AI-powered analysis and documentation
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"
                  style={{ translateY: "100%" }}
                />
                <span className="relative z-10">Get Started</span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-blue-500/50 text-blue-100 hover:bg-blue-500/10 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-blue-500/5 translate-y-full group-hover:translate-y-0 transition-transform"
                  style={{ translateY: "100%" }}
                />
                <span className="relative z-10">Learn More</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 