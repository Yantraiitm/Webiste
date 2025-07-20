import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SiteLayout from "@/components/layout/site-layout"
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yantra - Where Machines Meet Intelligence",
  description: "Yantra Robotics Club - Innovate, Create, Automate",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <SiteLayout>{children}</SiteLayout>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

