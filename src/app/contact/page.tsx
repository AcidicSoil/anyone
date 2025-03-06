/**
 * Contact Page
 * 
 * This page provides a contact form for users to get in touch with the team.
 * It includes fields for name, email, subject, and message, along with form validation.
 */

import { Metadata } from "next"
import Link from "next/link"
import { Mail, MessageSquare, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Contact Us | anyone",
  description: "Get in touch with the anyone team for questions, feedback, or support.",
}

export default function ContactPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl">
          Have questions, feedback, or need support? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond within 24-48 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                        <User className="h-4 w-4" />
                      </div>
                      <Input id="name" placeholder="Your name" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                        <Mail className="h-4 w-4" />
                      </div>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="pl-10" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is your message about?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-muted-foreground">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide as much detail as possible..." 
                      className="min-h-[150px] pl-10"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Alternative ways to reach us
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">support@anyone-platform.com</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-1">Office Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9am - 5pm EST</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-1">Social Media</h3>
                <div className="flex space-x-4 mt-2">
                  <Link href="https://github.com/anyone-platform" className="text-muted-foreground hover:text-primary transition-colors">
                    GitHub
                  </Link>
                  <Link href="https://twitter.com/anyone_platform" className="text-muted-foreground hover:text-primary transition-colors">
                    Twitter
                  </Link>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/faq">
                  Check our FAQ
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
} 