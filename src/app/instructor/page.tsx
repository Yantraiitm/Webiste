"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Users, BookOpen, Settings, PlusCircle, Edit, Trash, Eye, MessageSquare, Search } from "lucide-react"
import InstructorSidebar from "@/components/instructor-sidebar"

// Sample data for dashboard
const stats = [
  { title: "Total Students", value: "456", icon: Users, change: "+8%" },
  { title: "Active Courses", value: "5", icon: BookOpen, change: "+1%" },
  { title: "Course Completion", value: "78%", icon: BarChart, change: "+3%" },
  { title: "Total Revenue", value: "$12,450", icon: BarChart, change: "+15%" },
]

// Sample courses data
const courses = [
  { id: 1, title: "Introduction to Robotics", students: 145, rating: 4.8, status: "Active" },
  { id: 2, title: "Advanced Robot Programming", students: 86, rating: 4.7, status: "Active" },
  { id: 3, title: "Robot Sensor Integration", students: 132, rating: 4.6, status: "Draft" },
  { id: 4, title: "Artificial Intelligence for Robotics", students: 93, rating: 4.9, status: "Active" },
]

// Sample student messages
const messages = [
  {
    id: 1,
    student: "John Smith",
    course: "Introduction to Robotics",
    message: "I'm having trouble with the sensor calibration in Module 3.",
    date: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    student: "Sarah Johnson",
    course: "Advanced Robot Programming",
    message: "Could you provide more examples for the path planning algorithm?",
    date: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    student: "Michael Brown",
    course: "Introduction to Robotics",
    message: "Thank you for the detailed feedback on my project!",
    date: "Yesterday",
    read: true,
  },
  {
    id: 4,
    student: "Emily Davis",
    course: "Artificial Intelligence for Robotics",
    message: "When will the next live session be scheduled?",
    date: "2 days ago",
    read: true,
  },
]

export default function InstructorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="flex">
        <InstructorSidebar />

        <div className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Instructor Dashboard</h1>
              <p className="text-gray-400">Welcome back, Dr. Jane Smith</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-gray-700">
                <Settings size={16} className="mr-2" />
                Settings
              </Button>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="font-bold">J</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab}>
            <TabsList className="bg-gray-900 border border-gray-800">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
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
                          <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-blue-500">
                            <stat.icon size={24} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Course Performance */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Course Performance</CardTitle>
                  <CardDescription>Overview of your course metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <div key={course.id} className="flex items-center justify-between py-2 border-b border-gray-800">
                        <div>
                          <p className="font-medium">{course.title}</p>
                          <p className="text-sm text-gray-400">{course.students} students enrolled</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <span className="text-yellow-500">★</span>
                            <span className="ml-1">{course.rating}</span>
                          </div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              course.status === "Active"
                                ? "bg-green-500/20 text-green-500"
                                : "bg-yellow-500/20 text-yellow-500"
                            }`}
                          >
                            {course.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Messages */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Latest messages from your students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {messages.slice(0, 3).map((message) => (
                      <div key={message.id} className="flex items-start gap-4 py-2 border-b border-gray-800">
                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                          <span className="font-bold">{message.student.charAt(0)}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{message.student}</p>
                            <span className="text-xs text-gray-500">{message.date}</span>
                          </div>
                          <p className="text-sm text-gray-400">{message.course}</p>
                          <p className="mt-1">{message.message}</p>
                        </div>
                        {!message.read && <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2"></div>}
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="mt-4 text-blue-500 p-0">
                    View all messages
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My Courses</h2>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <PlusCircle size={16} className="mr-2" />
                  Create New Course
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
                          <th className="text-left p-4">Rating</th>
                          <th className="text-left p-4">Status</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((course) => (
                          <tr key={course.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                            <td className="p-4">{course.title}</td>
                            <td className="p-4">{course.students}</td>
                            <td className="p-4">
                              <div className="flex items-center">
                                <span className="text-yellow-500">★</span>
                                <span className="ml-1">{course.rating}</span>
                              </div>
                            </td>
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

            {/* Messages Tab */}
            <TabsContent value="messages" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Student Messages</h2>
                <Button variant="outline" className="border-gray-700">
                  Mark All as Read
                </Button>
              </div>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left p-4">Student</th>
                          <th className="text-left p-4">Course</th>
                          <th className="text-left p-4">Message</th>
                          <th className="text-left p-4">Date</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {messages.map((message) => (
                          <tr
                            key={message.id}
                            className={`border-b border-gray-800 hover:bg-gray-800/50 ${!message.read ? "bg-gray-800/30" : ""}`}
                          >
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                                  <span className="font-bold text-sm">{message.student.charAt(0)}</span>
                                </div>
                                <span>{message.student}</span>
                                {!message.read && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                              </div>
                            </td>
                            <td className="p-4">{message.course}</td>
                            <td className="p-4 max-w-xs truncate">{message.message}</td>
                            <td className="p-4 text-gray-400">{message.date}</td>
                            <td className="p-4">
                              <Button className="bg-blue-500 hover:bg-blue-600">
                                <MessageSquare size={16} className="mr-2" />
                                Reply
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Students Tab */}
            <TabsContent value="students" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My Students</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search students..."
                    className="bg-gray-900 border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                </div>
              </div>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left p-4">Student</th>
                          <th className="text-left p-4">Email</th>
                          <th className="text-left p-4">Enrolled Courses</th>
                          <th className="text-left p-4">Progress</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: 1, name: "John Smith", email: "john@example.com", courses: 2, progress: 75 },
                          { id: 2, name: "Sarah Johnson", email: "sarah@example.com", courses: 1, progress: 45 },
                          { id: 3, name: "Michael Brown", email: "michael@example.com", courses: 3, progress: 90 },
                          { id: 4, name: "Emily Davis", email: "emily@example.com", courses: 2, progress: 60 },
                          { id: 5, name: "David Wilson", email: "david@example.com", courses: 1, progress: 30 },
                        ].map((student) => (
                          <tr key={student.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                                  <span className="font-bold text-sm">{student.name.charAt(0)}</span>
                                </div>
                                <span>{student.name}</span>
                              </div>
                            </td>
                            <td className="p-4">{student.email}</td>
                            <td className="p-4">{student.courses}</td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <div className="w-full bg-gray-800 rounded-full h-2.5">
                                  <div
                                    className="bg-blue-500 h-2.5 rounded-full"
                                    style={{ width: `${student.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm">{student.progress}%</span>
                              </div>
                            </td>
                            <td className="p-4">
                              <Button variant="outline" size="sm" className="border-gray-700">
                                <MessageSquare size={14} className="mr-2" />
                                Message
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Earnings Tab */}
            <TabsContent value="earnings" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Earnings</h2>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-gray-700">
                    This Month
                  </Button>
                  <Button variant="outline" className="border-gray-700">
                    Export
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center justify-center h-full">
                      <p className="text-sm text-gray-400">Total Earnings</p>
                      <h3 className="text-4xl font-bold mt-2">$12,450</h3>
                      <p className="text-xs text-green-500 mt-1">+15% from last month</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center justify-center h-full">
                      <p className="text-sm text-gray-400">This Month</p>
                      <h3 className="text-4xl font-bold mt-2">$2,845</h3>
                      <p className="text-xs text-green-500 mt-1">+8% from last month</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center justify-center h-full">
                      <p className="text-sm text-gray-400">Pending Payout</p>
                      <h3 className="text-4xl font-bold mt-2">$1,245</h3>
                      <p className="text-xs text-gray-400 mt-1">Processing on Apr 30</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Earnings by Course</CardTitle>
                  <CardDescription>Revenue breakdown by course</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.map((course, index) => (
                      <div key={course.id} className="flex items-center justify-between py-2 border-b border-gray-800">
                        <div>
                          <p className="font-medium">{course.title}</p>
                          <p className="text-sm text-gray-400">{course.students} students enrolled</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">${(course.students * 50).toLocaleString()}</p>
                          <p className="text-xs text-gray-400">
                            {index === 0 ? "+12%" : index === 1 ? "+8%" : index === 2 ? "+5%" : "+10%"} this month
                          </p>
                        </div>
                      </div>
                    ))}
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

