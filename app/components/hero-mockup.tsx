"use client"

import { useState } from "react"
import { Send, Bot } from "lucide-react"

export default function HeroMockup() {
  const [isTyping, setIsTyping] = useState(false)

  return (
    <div className="w-full max-w-4xl mx-auto h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 min-h-[400px] sm:min-h-[500px] flex flex-col">
      {/* Header */}
      <div className="border-b px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#bed903] rounded-full flex items-center justify-center">
            <Bot className="h-4 w-4 text-[#2c2e2e]" />
          </div>
          <h2 className="text-sm sm:text-base md:text-lg font-medium text-[#2c2e2e]">CryptoComply AI Assistant</h2>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-3 sm:p-4 md:p-6 space-y-4 overflow-y-auto">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] bg-[#2c2e2e] text-white rounded-2xl rounded-br-md px-3 sm:px-4 py-2 sm:py-3">
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-medium">
                  What risks should I be worried about with this relationship?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-start">
          <div className="max-w-[85%] bg-gray-50 rounded-2xl rounded-bl-md px-3 sm:px-4 py-2 sm:py-3 border">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#bed903] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bot className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#2c2e2e]" />
              </div>
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-[#2c2e2e] mb-2">
                  Based on your Global AML Policy, this relationship presents the following risks:
                </p>
                <ul className="text-xs sm:text-sm text-[#2c2e2e] space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>High-risk jurisdiction (Nigeria)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>High-risk industry (import/export)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Typing Indicator */}
        <div className="flex justify-start">
          <div className="bg-gray-50 rounded-2xl rounded-bl-md px-3 sm:px-4 py-2 sm:py-3 border">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#bed903] rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#2c2e2e]" />
              </div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t p-3 sm:p-4 bg-gray-50">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Ask about risks, policies, counterparties, or get recommendations"
              className="w-full px-2 sm:px-3 py-2 sm:py-2.5 border rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-[#bed903] focus:border-transparent bg-white placeholder:text-xs placeholder:text-gray-500"
            />
          </div>
          <button className="w-8 h-8 bg-[#bed903] rounded-full flex items-center justify-center flex-shrink-0">
            <Send className="h-3 w-3 text-[#2c2e2e]" />
          </button>
        </div>
      </div>
    </div>
  )
}
