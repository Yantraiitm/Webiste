"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, BookOpen, Calendar, FileText, Settings, PlusCircle, Edit, Trash, Eye } from "lucide-react"
import AdminSidebar from "@/components/admin-sidebar"

// Sample data for dashboard
const stats = [
  { title: "Total Users", value: "1,234", icon: Users, change: "+12%" },
  { title: "Active Courses", value: "24", icon: BookOpen, change: "+2%" },
  { title: "Upcoming Events", value: "8", icon: Calendar, change: "0%" },
  { title: "Blog Posts", value: "56", icon: FileText, change: "+5%" },
]

// Sample courses data
const courses = [
  { id: 1, title: "Introduction to Robotics", students: 245, revenue: "$12,450", status: "Active" },
  { id: 2, title: "Advanced Robot Programming", students: 186, revenue: "$9,300", status: "Active" },
  { id: 3, title: "Robot Sensor Integration", students: 132, revenue: "$6,600", status: "Draft" },
  { id: 4, title: "Artificial Intelligence for Robotics", students: 210, revenue: "$10,500", status: "Active" },
]

// Sample blog posts data
const blogPosts = [
  { id: 1, title: "The Future of Autonomous Robots", author: "Dr. Jane Smith", date: "Mar 28, 2025", views: 1245 },
  {
    id: 2,
    title: "Machine Learning in Robotics: A Practical Guide",
    author: "Prof. John Doe",
    date: "Mar 20, 2025",
    views: 986,
  },
  {
    id: 3,
    title: "Ethical Considerations in AI-Powered Robotics",
    author: "Dr. Emily Chen",
    date: "Mar 15, 2025",
    views: 754,
  },
  {
    id: 4,
    title: "Building Your First Robot: A Beginner's Guide",
    author: "Michael Johnson",
    date: "Mar 10, 2025",
    views: 1532,
  },
]

// Sample events data
const events = [
  { id: 1, title: "Robotics Workshop 2025", date: "Apr 15, 2025", registrations: 78, status: "Upcoming" },
  { id: 2, title: "AI in Robotics Seminar", date: "Apr 22, 2025", registrations: 45, status: "Upcoming" },
  { id: 3, title: "Annual Robotics Competition", date: "May 5-7, 2025", registrations: 120, status: "Open" },
  {
    id: 4,
    title: "Industry Connect: Robotics in Manufacturing",
    date: "May 15, 2025",
    registrations: 32,
    status: "Open",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="flex">
        <AdminSidebar />

        <div className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-400">Welcome back, Admin</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-gray-700">
                <Settings size={16} className="mr-2" />
                Settings
              </Button>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="font-bold">A</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab}>
            <TabsList className="bg-gray-900 border border-gray-800">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="blogs">Blog Posts</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-900 border-gray-800">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-400">{stat.title}</p>
                            <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                            <p className="text-xs text-green-500 mt-1">{stat.change} this month</p>
                          </div>
                          <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white">
                            <stat.icon size={24} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest actions across the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: "New user registered", user: "John Smith", time: "2 hours ago" },
                      { action: "New course published", user: "Admin", time: "5 hours ago" },
                      { action: "Blog post created", user: "Dr. Jane Smith", time: "Yesterday" },
                      { action: "Event updated", user: "Admin", time: "Yesterday" },
                      { action: "User enrolled in course", user: "Sarah Johnson", time: "2 days ago" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-800">
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-gray-400">by {activity.user}</p>
                        </div>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Courses</h2>
                <Button className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878]">
                  <PlusCircle size={16} className="mr-2" />
                  Add New Course
                </Button>
              </div>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left p-4">Course Title</th>
                          <th className="text-left p-4">Students</th>
                          <th className="text-left p-4">Revenue</th>
                          <th className="text-left p-4">Status</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((course) => (
                          <tr key={course.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                            <td className="p-4">{course.title}</td>
                            <td className="p-4">{course.students}</td>
                            <td className="p-4">{course.revenue}</td>
                            <td className="p-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  course.status === "Active"
                                    ? "bg-green-500/20 text-green-500"
                                    : "bg-yellow-500/20 text-yellow-500"
                                }`}
                              >
                                {course.status}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye size={16} />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit size={16} />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                                  <Trash size={16} />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Blog Posts Tab */}
            <TabsContent value="blogs" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Blog Posts</h2>
                <Button className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878]">
                  <PlusCircle size={16} className="mr-2" />
                  Create New Post
                </Button>
              </div>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left p-4">Title</th>
                          <th className="text-left p-4">Author</th>
                          <th className="text-left p-4">Date</th>
                          <th className="text-left p-4">Views</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blogPosts.map((post) => (
                          <tr key={post.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                            <td className="p-4">{post.title}</td>
                            <td className="p-4">{post.author}</td>
                            <td className="p-4">{post.date}</td>
                            <td className="p-4">{post.views}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye size={16} />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit size={16} />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                                  <Trash size={16} />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Events</h2>
                <Button className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878]">
                  <PlusCircle size={16} className="mr-2" />
                  Create New Event
                </Button>
              </div>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left p-4">Event Title</th>
                          <th className="text-left p-4">Date</th>
                          <th className="text-left p-4">Registrations</th>
                          <th className="text-left p-4">Status</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {events.map((event) => (
                          <tr key={event.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                            <td className="p-4">{event.title}</td>
                            <td className="p-4">{event.date}</td>
                            <td className="p-4">{event.registrations}</td>
                            <td className="p-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  event.status === "Upcoming"
                                    ? "bg-blue-500/20 text-blue-500"
                                    : "bg-green-500/20 text-green-500"
                                }`}
                              >
                                {event.status}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye size={16} />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit size={16} />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                                  <Trash size={16} />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Users</h2>
                <Button className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878]">
                  View All Users
                </Button>
              </div>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left p-4">Name</th>
                          <th className="text-left p-4">Email</th>
                          <th className="text-left p-4">Role</th>
                          <th className="text-left p-4">Joined</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            id: 1,
                            name: "John Smith",
                            email: "john@example.com",
                            role: "Student",
                            joined: "Mar 15, 2025",
                          },
                          {
                            id: 2,
                            name: "Sarah Johnson",
                            email: "sarah@example.com",
                            role: "Student",
                            joined: "Mar 10, 2025",
                          },
                          {
                            id: 3,
                            name: "Dr. Jane Smith",
                            email: "jane@example.com",
                            role: "Instructor",
                            joined: "Feb 28, 2025",
                          },
                          {
                            id: 4,
                            name: "Prof. John Doe",
                            email: "john.doe@example.com",
                            role: "Instructor",
                            joined: "Feb 20, 2025",
                          },
                          {
                            id: 5,
                            name: "Michael Brown",
                            email: "michael@example.com",
                            role: "Admin",
                            joined: "Jan 15, 2025",
                          },
                        ].map((user) => (
                          <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                            <td className="p-4">{user.name}</td>
                            <td className="p-4">{user.email}</td>
                            <td className="p-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  user.role === "Admin"
                                    ? "bg-purple-500/20 text-purple-500"
                                    : user.role === "Instructor"
                                      ? "bg-blue-500/20 text-blue-500"
                                      : "bg-green-500/20 text-green-500"
                                }`}
                              >
                                {user.role}
                              </span>
                            </td>
                            <td className="p-4">{user.joined}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye size={16} />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit size={16} />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                                  <Trash size={16} />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

