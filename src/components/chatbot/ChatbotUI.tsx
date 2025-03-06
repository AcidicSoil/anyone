/**
 * Chatbot UI Component
 * 
 * This component provides an interactive chat interface for users to interact with the platform.
 * It includes a chat window, message input, and controls for managing the conversation.
 * 
 * File path: src/components/chatbot/ChatbotUI.tsx
 */

"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Loader2, X, Minimize2, Maximize2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Define types for our messages
type MessageType = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function ChatbotUI() {
  // State for managing the chat
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "welcome-message",
      content: "👋 Hi there! I'm your repository analysis assistant. How can I help you today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  
  // Ref for scrolling to bottom of messages
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!input.trim()) return
    
    // Create a new user message
    const userMessage: MessageType = {
      id: `user-${Date.now()}`,
      content: input,
      role: "user",
      timestamp: new Date(),
    }
    
    // Add user message to chat
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      // Create a response message
      const responseMessage: MessageType = {
        id: `assistant-${Date.now()}`,
        content: getSimulatedResponse(input),
        role: "assistant",
        timestamp: new Date(),
      }
      
      // Add response to chat
      setMessages((prev) => [...prev, responseMessage])
      setIsLoading(false)
    }, 1000)
  }

  // Simple function to simulate responses
  const getSimulatedResponse = (userInput: string): string => {
    const userInputLower = userInput.toLowerCase()
    
    if (userInputLower.includes("hello") || userInputLower.includes("hi")) {
      return "Hello! How can I help you with your repository analysis today?"
    } else if (userInputLower.includes("repository") || userInputLower.includes("repo")) {
      return "I can help you analyze your repository and suggest Ollama integration strategies. Would you like to upload a repository or learn more about our analysis process?"
    } else if (userInputLower.includes("ollama")) {
      return "Ollama is a framework for running LLMs locally. I can help you integrate it with your repository and suggest the best models for your specific codebase."
    } else if (userInputLower.includes("model") || userInputLower.includes("models")) {
      return "We support a variety of models through Ollama, including Llama 2, Mistral, and more. Each has different strengths depending on your use case and codebase."
    } else if (userInputLower.includes("help")) {
      return "I can help with repository analysis, Ollama integration, model selection, and generating integration guides. Just let me know what you're interested in!"
    } else {
      return "I understand you're interested in that. To provide more specific help, could you upload your repository or tell me more about your project?"
    }
  }

  // Handle pressing Enter to send message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // If chat is closed, show only the button to open it
  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button 
          onClick={() => setIsOpen(true)} 
          className="rounded-full h-14 w-14 shadow-lg"
        >
          <span className="sr-only">Open chat</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-80 md:w-96 shadow-lg transition-all duration-200 ${isMinimized ? 'h-14' : 'h-[500px]'}`}>
        <CardHeader className="p-3 border-b flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <div className="bg-primary text-primary-foreground rounded-full h-full w-full flex items-center justify-center">
                AI
              </div>
            </Avatar>
            <div>
              <h3 className="font-medium text-sm">Repository Assistant</h3>
              {!isMinimized && <p className="text-xs text-muted-foreground">Ask me anything about your repository</p>}
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7" 
                    onClick={() => setIsMinimized(!isMinimized)}
                  >
                    {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  {isMinimized ? 'Maximize' : 'Minimize'}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7" 
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  Close
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        
        {!isMinimized && (
          <>
            <CardContent className="p-0 flex-grow">
              <ScrollArea className="h-[380px] p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg px-3 py-2 bg-muted">
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
            </CardContent>
            
            <CardFooter className="p-3 pt-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
                className="flex w-full items-center space-x-2"
              >
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={isLoading || !input.trim()}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  )
}