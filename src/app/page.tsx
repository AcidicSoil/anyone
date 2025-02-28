import { Button } from "@/components/ui/button"
import { RootLayout } from "@/components/layout/root-layout"

export default function Home() {
  return (
    <RootLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 md:pt-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Code Analysis Made Simple
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Understand any codebase instantly with AI-powered analysis and documentation.
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards will go here */}
          </div>
        </section>
      </div>
    </RootLayout>
  )
} 