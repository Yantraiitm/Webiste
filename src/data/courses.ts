// Course data structure
export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
  category: "Bot" | "Robotic Arm" | "Drone" | "Microcontroller" | "ROS";
  level: "beginner" | "intermediate" | "advanced";
  featured?: boolean;
  image?: string;
  sessions?: {
    name: string;
    date?: string;
    link?: string;
  }[];
}

// Course data
export const courses: Course[] = [
  {
    id: 1,
    title: "Bot Building",
    instructor: "Akhilesh Bhagat, Mentor Yantra",
    description: "An introductory session to walk new members through the basics of robotics and what to expect in the Bot Building series.",
    category: "Bot",
    level: "beginner",
    image: "/images/placeholder.jpg",
    sessions: [
      { name: "Orientation Bot Building Orientation" },
      { name: "Session 1 Bot Building session 1" },
      { name: "Session 2 Bot Building session 2" },
      { name: "Session 3 Bot Building session 3" },
      { name: "Session 4 Bot Building session 4" }
    ]
  },
  {
    id: 2,
    title: "Robotic Arm",
    instructor: "Arunaya, Mentor Yantra",
    description: "An engaging session focused on understanding and building robotic arms, exploring concepts like servo control and joint movement.",
    category: "Robotic Arm",
    level: "intermediate",
    image: "/images/placeholder.jpg",
    sessions: [
      { name: "robotic arm session", date: "26-1-2025" },
      { name: "soldering session", date: "15 feb 2025" }
    ]
  },
  {
    id: 3,
    title: "Drone Workshop Series",
    instructor: "Vivek, Mentor Yantra",
    description: "A series of immersive sessions exploring the mechanics, control systems, and real-time flight of drones.",
    category: "Drone",
    level: "advanced",
    image: "/images/placeholder.jpg",
    sessions: [
      { name: "Drone Workshop 1", link: "https://www.youtube.com/watch?v=KB-Gds-XvfA" },
      { name: "Drone Workshop 2", link: "https://www.youtube.com/watch?v=l5yeXSbZA7k" },
      { name: "Drone Workshop 3", link: "https://www.youtube.com/watch?v=y_C7eLbd2-s" },
      { name: "Drone Workshop 4", link: "https://www.youtube.com/live/sEF1hyW8WZM" }
    ]
  },
  {
    id: 4,
    title: "Robot Kinematics: DH Parameter",
    instructor: "Rajashekhar V S, IIT Kanpur",
    description: "A technical session focused on Denavit–Hartenberg parameters used in robot kinematics to model the motion and structure of robotic arms.",
    category: "Robotic Arm",
    level: "beginner",
    featured: true,
    image: "/images/kinematics.png",
    sessions: [
      { name: "Robot Kinematics: DH Parameter" }
    ]
  },
  {
    id: 5,
    title: "Drone Technology Workshop",
    instructor: "Prof Soumya Ranjan Sahoo, IIT kanpur",
    description: "An expert-led workshop was conducted by Yantra to introduce students to the fundamentals and real-world applications of drone technology.",
    category: "Drone",
    level: "beginner",
    featured: true,
    image: "/images/drone.png",
    sessions: [
      { name: "Drone Technology Workshop held by YANTRA - The Robotics Club." }
    ]
  },
  {
    id: 6,
    title: "Microcontroller coding",
    instructor: "Livin Nector, IIT Madras",
    description: "A beginner-friendly bootcamp where participants explored microcontroller programming and hardware interfacing over three intensive, hands-on days.",
    category: "Microcontroller",
    level: "beginner",
    image: "/images/placeholder.jpg",
    sessions: [
      { name: "Day 1 Microcontroller Coding  3 Days Bootcamp  Day 1 1080p" },
      { name: "Day 2 Microcontroller Coding  3 Days Bootcamp  Day 2 1080" },
      { name: "Day 3 Microcontroller Coding  3 Days Bootcamp  Day 3 1080p" }
    ]
  },
  {
    id: 7,
    title: "ROS",
    instructor: "FINNY VARGHESE, KONPANION United Kingdom",
    description: "A session introducing the powerful open-source framework used in professional robotics systems, covering its architecture and applications.",
    category: "ROS",
    level: "beginner",
    featured: true,
    image: "/images/ROS.png",
    sessions: [
      { name: "Robot Operating System ROS! 🤖" }
    ]
  },
  {
    id: 8,
    title: "Robo Rumble IoT session",
    instructor: "Vikram Jirgale, VIT Pune",
    description: "An interactive session exploring how to connect and control robots through cloud-based IoT platforms, bridging software and hardware in smart ways.",
    category: "Bot",
    level: "intermediate",
    image: "/images/placeholder.jpg",
    sessions: [
      { name: "IoT Session : Robo Rumble Cloud Connect" }
    ]
  }
];

// Function to get featured courses
export const getFeaturedCourses = () => {
  return courses.filter(course => course.featured);
};

// Function to get all courses
export const getAllCourses = () => {
  return courses;
};

// Function to get courses by category
export const getCoursesByCategory = (category: Course['category']) => {
  return courses.filter(course => course.category === category);
};

// Function to get courses by level
export const getCoursesByLevel = (level: Course['level']) => {
  return courses.filter(course => course.level === level);
};