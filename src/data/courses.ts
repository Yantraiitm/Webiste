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
    image: "/images/bot.png",
    sessions: [
      { name: "Orientation", link: "https://youtu.be/bQRRDlNTNBQ?si=LnHb8dG-3bl2OP22" },
      { name: "Session 1", link: "https://youtu.be/xRZKRS9ffTY?si=VbcmSu6P-NFB373a" },
      { name: "Session 2", link: "https://youtu.be/hrtOh5WgNo4?si=4BZ5e7BEn6w1LA2s" },
      { name: "Session 3", link: "https://youtu.be/TBpOLI0Yd8g?si=vwS4Pd3nC_4JSpt1" },
      { name: "Session 4", link: "https://youtu.be/t1QyfLQhxYI?si=oNszocWeqHSrpOt7" }
    ]
  },
  {
    id: 2,
    title: "Robotic Arm",
    instructor: "Arunya, Mentor Yantra",
    description: "An engaging session focused on understanding and building robotic arms, exploring concepts like servo control and joint movement.",
    category: "Robotic Arm",
    level: "intermediate",
    image: "/images/robo-arm-d.png",
    sessions: [
      { name: "Robotic arm session", date: "26-1-2025", link: "https://youtu.be/gZNpzfyUTS4?si=YgrjBFdg0M1qjM6x" },
      { name: "Soldering session", date: "15 feb 2025", link: "https://youtu.be/UVBREbFRtHE?si=tX8k2QtBcXvpXtJs" }
    ]
  },
  {
    id: 3,
    title: "Drone Workshop Series",
    instructor: "Vivek, Mentor Yantra",
    description: "A series of immersive sessions exploring the mechanics, control systems, and real-time flight of drones.",
    category: "Drone",
    level: "advanced",
    image: "/images/drone.png",
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
      { name: "Robot Kinematics: DH Parameter", link: "https://youtu.be/b7BBMz7PSDo?si=728FASWhhRru9yp2" }
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
      { name: "Drone Technology Workshop held by YANTRA - The Robotics Club.", link: "https://youtu.be/xFwM8VU965g?si=svuByK5slKpXT6TK" }
    ]
  },
  {
    id: 6,
    title: "Microcontroller coding",
    instructor: "Livin Nector, IIT Madras",
    description: "A beginner-friendly bootcamp where participants explored microcontroller programming and hardware interfacing over three intensive, hands-on days.",
    category: "Microcontroller",
    level: "beginner",
    image: "/images/micro.png",
    sessions: [
      { name: "Day 1 Microcontroller Coding  3 Days Bootcamp  Day 1 1080p", link: "https://youtu.be/7eMNZYVsjzw?si=kNsDLEN5z6NUstpz" },
      { name: "Day 2 Microcontroller Coding  3 Days Bootcamp  Day 2 1080", link: "https://youtu.be/Eti4lYY0JKg?si=h9bwfjgz933R2dUj" },
      { name: "Day 3 Microcontroller Coding  3 Days Bootcamp  Day 3 1080p", link: "https://youtu.be/w5cSI-V50js?si=9gRI0_SqMX1eiRDq" }
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
      { name: "Robot Operating System ROS! 🤖", link: "https://youtu.be/CHPRHZlvuVI?si=FukmkylQrnvEs-O8" }
    ]
  },
  {
    id: 8,
    title: "Robo Rumble IoT session",
    instructor: "Vikram Jirgale, VIT Pune",
    description: "An interactive session exploring how to connect and control robots through cloud-based IoT platforms, bridging software and hardware in smart ways.",
    category: "Bot",
    level: "intermediate",
    image: "/images/bot.png",
    sessions: [
      { name: "IoT Session : Robo Rumble Cloud Connect", link: "https://youtu.be/UMloaq6lqJc?si=3Ao5aASx89z9JxJN" }
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