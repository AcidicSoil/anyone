/**
 * FAQ Page
 * 
 * This page provides answers to frequently asked questions about the platform.
 * It includes sections on general questions, technical questions, and pricing.
 */

import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "FAQ | anyone",
  description: "Frequently asked questions about the anyone platform.",
}

export default function FAQPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground max-w-2xl">
          Find answers to the most common questions about the anyone platform.
          If you can't find what you're looking for, feel free to contact us.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">General Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-anyone">
              <AccordionTrigger>What is anyone?</AccordionTrigger>
              <AccordionContent>
                anyone is a platform that makes repository analysis and Ollama integration accessible to everyone. 
                It helps you understand your codebase, analyze compatibility with different models, and generate 
                integration guides tailored to your specific repository.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="who-is-it-for">
              <AccordionTrigger>Who is anyone for?</AccordionTrigger>
              <AccordionContent>
                anyone is designed for developers, teams, and organizations of all sizes who want to leverage 
                AI models with their codebase. Whether you're a solo developer exploring AI integration or a 
                large team looking to streamline your workflow, anyone provides the tools you need.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="getting-started">
              <AccordionTrigger>How do I get started?</AccordionTrigger>
              <AccordionContent>
                Getting started is easy! Simply create an account, upload your repository or connect to your 
                GitHub account, and our platform will analyze your codebase. You'll receive compatibility scores 
                and integration guides within minutes. Check out our <Link href="/docs" className="text-primary hover:underline">documentation</Link> for 
                detailed instructions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technical Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="supported-languages">
              <AccordionTrigger>What programming languages are supported?</AccordionTrigger>
              <AccordionContent>
                anyone currently supports analysis for repositories written in JavaScript, TypeScript, Python, 
                Java, C#, Go, Rust, and Ruby. We're constantly expanding our language support based on user feedback.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="repository-size">
              <AccordionTrigger>Is there a limit to repository size?</AccordionTrigger>
              <AccordionContent>
                Free accounts can analyze repositories up to 100MB in size. Premium accounts can analyze 
                repositories up to 1GB. For larger repositories, please contact us for custom solutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="data-privacy">
              <AccordionTrigger>How is my repository data handled?</AccordionTrigger>
              <AccordionContent>
                We take data privacy seriously. Your repository data is encrypted in transit and at rest. 
                We only store the necessary metadata to provide our services and never share your code with 
                third parties. For more details, please review our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Pricing & Plans</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="free-tier">
              <AccordionTrigger>Is there a free tier?</AccordionTrigger>
              <AccordionContent>
                Yes! We offer a free tier that includes basic repository analysis, compatibility scoring for 
                popular models, and simple integration guides. This is perfect for individual developers or 
                small projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="premium-features">
              <AccordionTrigger>What features are included in premium plans?</AccordionTrigger>
              <AccordionContent>
                Premium plans include advanced analysis features, support for larger repositories, 
                custom integration guides, priority support, and team collaboration tools. Visit our 
                pricing page for a detailed comparison of all plans.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="enterprise">
              <AccordionTrigger>Do you offer enterprise solutions?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer enterprise solutions with custom features, dedicated support, and 
                on-premises deployment options. Please <Link href="/contact" className="text-primary hover:underline">contact us</Link> to discuss 
                your specific requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>

      <div className="mt-12 text-center">
        <p className="mb-4">Still have questions?</p>
        <Button asChild>
          <Link href="/contact">
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  )
} 