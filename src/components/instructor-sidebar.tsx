"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  BookOpen,
  Users,
  MessageSquare,
  BarChart,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function InstructorSidebar() {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/instructor" },
    { icon: BookOpen, label: "My Courses", href: "/instructor/courses" },
    { icon: Users, label: "Students", href: "/instructor/students" },
    { icon: MessageSquare, label: "Messages", href: "/instructor/messages" },
    { icon: BarChart, label: "Earnings", href: "/instructor/earnings" },
    { icon: Settings, label: "Settings", href: "/instructor/settings" },
  ]

  return (
    <motion.div
      className="h-screen bg-gray-900 border-r border-gray-800 flex flex-col"
      initial={{ width: 240 }}
      animate={{ width: collapsed ? 80 : 240 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2 overflow-hidden">
          <Image src="/images/LOGO.png" alt="Yantra Logo" width={32} height={32} />
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="font-bold text-lg"
            >
              Instructor
            </motion.span>
          )}
        </div>
        <button onClick={() => setCollapsed(!collapsed)} className="text-gray-400 hover:text-white transition-colors">
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-2 px-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors ${
                  item.href === "/instructor" ? "bg-blue-500 text-white hover:bg-blue-600" : "text-gray-300"
                }`}
              >
                <item.icon size={20} />
                {!collapsed && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    {item.label}
                  </motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t border-gray-800">
        <Link
          href="/logout"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:bg-gray-800 transition-colors"
        >
          <LogOut size={20} />
          {!collapsed && (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              Logout
            </motion.span>
          )}
        </Link>
      </div>
    </motion.div>
  )
}

