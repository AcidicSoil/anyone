import { Hero } from "@/components/features/welcome/hero"
import { ActionButtons } from "@/components/features/welcome/action-buttons"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Hero />
      <ActionButtons />
      
      {/* Features Grid - Coming in next step */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature cards will go here */}
        </div>
      </section>
    </main>
  )
} 