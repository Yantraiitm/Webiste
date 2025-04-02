"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
    // State to track if the component has loaded
    const [isLoaded, setIsLoaded] = useState(false)

    // Set the component as loaded after the first render
    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <section className="relative min-h-[100vh] flex items-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80"></div>

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-orange-500 rounded-full"
                            initial={{
                                x: Math.random() * 100 + "%",
                                y: Math.random() * 100 + "%",
                                opacity: 0.2 + Math.random() * 0.5,
                            }}
                            animate={{
                                y: [null, Math.random() * 100 + "%"],
                                opacity: [null, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 7,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main content container */}
            <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between pl-20">
                {/* Left section: Text and buttons */}
                <motion.div
                    className="md:w-1/2 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative">
                        {/* Rotating decorative image */}
                        <motion.div
                            className="absolute -left-8 -top-8 w-20 h-20 opacity-60"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                            <Image src="/images/BRUSH-STROKE.png" alt="Decoration" width={80} height={80} />
                        </motion.div>

                        {/* Main heading */}
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight relative z-10">
                            WHERE <span className="text-orange-500">MACHINES</span> <br /> MEET <br />
                            <span className="relative">
                                INTELLIGENCE
                                {/* Underline animation */}
                                <motion.div
                                    className="absolute -bottom-2 left-0 h-2 bg-orange-500/30 w-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1, duration: 1 }}
                                />
                            </span>
                        </h1>

                        {/* Subheading */}
                        <motion.h2
                            className="text-2xl md:text-3xl mt-4 text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        >
                            HELLO THERE!!!
                        </motion.h2>
                    </div>

                    {/* Description paragraph */}
                    <motion.p
                        className="text-gray-400 text-lg max-w-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        Join the future of robotics and artificial intelligence. Innovate, create, and transform the world with
                        cutting-edge technology.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="pt-4 flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        {/* Join Us button */}
                        <Link href="/join">
                            <Button className="relative group overflow-hidden bg-transparent border-0">
                                <span className="relative z-10 px-6 py-3 flex items-center gap-2 font-bold">
                                    JOIN US !!
                                    {/* Arrow animation */}
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                                    >
                                        <ArrowRight size={16} />
                                    </motion.div>
                                </span>
                                {/* Button ring decoration */}
                                <Image
                                    src="/images/BUTTON-RING.png"
                                    alt="Button Ring"
                                    width={300}
                                    height={200}
                                    className="absolute inset-0 w-full h-full object-contain group-hover:scale-150 transition-transform"
                                />
                            </Button>
                        </Link>

                        {/* Explore Courses button */}
                        <Link href="/courses">
                            <Button variant="outline" className="border-white/50 hover:border-white hover:bg-white/10">
                                Explore Courses
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Animated dots */}
                    <motion.div
                        className="flex gap-4 pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-orange-500"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "loop",
                                    delay: i * 0.3,
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right section: Robot image */}
                <motion.div
                    className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Glowing effect behind robot */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                    />

                    {/* Floating robot image */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotateZ: [0, 2, 0, -2, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                        }}
                        className="relative z-10"
                    >
                        <Image
                            src="/images/ROBOT.png"
                            alt="Yantra Robot"
                            width={600}
                            height={600}
                            className="object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                            priority
                        />
                    </motion.div>

            
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
                <motion.div
                    className="w-1 h-10 bg-gradient-to-b from-orange-500 to-transparent rounded-full"
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.7, 0.3, 0.7],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                    }}
                />
            </motion.div>
        </section>
    )
}
