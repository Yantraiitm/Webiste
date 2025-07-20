"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { SignUp } from '@clerk/nextjs'
import { Check, Zap, Users } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="container px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <motion.div
            className="lg:w-1/2 max-w-md"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center lg:text-left mb-8">
              <Image src="/images/LOGO.png" alt="Yantra Logo" width={80} height={80} className="mx-auto lg:mx-0" />
              <h1 className="text-3xl font-bold mt-4">Join Yantra</h1>
              <p className="text-gray-400 mt-2">Create your account to access exclusive robotics resources and courses.</p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <SignUp 
                routing="hash"
                signInUrl="/login"
                fallbackRedirectUrl="/courses"
               
              />
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] bg-clip-text text-transparent hover:from-[#7F35CF] hover:to-[#F87878]">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] bg-clip-text text-transparent hover:from-[#7F35CF] hover:to-[#F87878]">
                Privacy Policy
              </Link>
              .
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block lg:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Robotics" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-12">
                <h2 className="text-3xl font-bold mb-4">Join the Robotics Revolution</h2>
                <p className="text-gray-300 mb-6">
                  Get access to exclusive courses, projects, and a community of robotics enthusiasts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white">Access to premium robotics courses</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] flex items-center justify-center">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white">Join exclusive workshops and events</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white">Connect with like-minded innovators</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
