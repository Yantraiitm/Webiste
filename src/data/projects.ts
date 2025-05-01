export type Project = {
  id: number;
  title: string;
  author: string;
  description: string;
  images: string[];
  category: string;
  status: string;
};

export type FeaturedProject = Project & {
  thumbnails: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Obstacle-Avoiding Robot",
    author: "Krish Ajay",
    description: "A 2-wheeled robot using Arduino Uno and an L298N motor driver, with an ultrasonic sensor mounted on a servo to detect obstacles. Powered by dual 3.7V 3200mAh Li-ion batteries, it autonomously adjusts its path to avoid collisions.",
    images: [
      "/images/projects/Krish-ajay1.png",
      "/images/projects/Krish-ajay2.png",
      "/images/projects/Krish-ajay3.png"
    ],
    category: "Robotics",
    status: "Completed"
  },
  {
    id: 2,
    title: "Robo Car Project using ESP32",
    author: "Kapil",
    description: "Built a Wi-Fi-controlled robo car using the ESP32 microcontroller that can be operated via a mobile browser by entering the local IP address. The project involved integrating motor drivers, setting up a web server on the ESP32, and implementing real-time control through IoT. It provided practical experience in embedded systems and IoT-based robotics.",
    images: [
      "/images/projects/Kapil1.png",
      "/images/projects/Kapil2.png"
    ],
    category: "IoT",
    status: "Completed"
  },
  {
    id: 3,
    title: "ESP32 Controlled Robo Car",
    author: "Biplab",
    description: "Designed and built a robo car powered by the ESP32 microcontroller. The car can be wirelessly controlled via any device on the same network by accessing a web interface hosted on the ESP32. The project combined motor control, web server setup, and IoT-based real-time interaction for seamless mobile-driven navigation.",
    images: [
      "/images/projects/Biplab.png",
      "/images/projects/Biplab1.png"
    ],
    category: "IoT",
    status: "Completed"
  },
  {
    id: 4,
    title: "Terrain-Capable Track Robot",
    author: "Shreyas",
    description: "Built a rugged, Wi-Fi-controlled robo car using the ESP32 microcontroller and a track-based drive system for better stability on rough terrains. The robot can be remotely operated via a browser interface and is designed to handle uneven surfaces, making it suitable for real-world obstacle navigation and exploration tasks.",
    images: [
      "/images/projects/robo-car1.png",
      "/images/projects/robo-car2.png"
    ],
    category: "Robotics",
    status: "Completed"
  }
];

export const featuredProjects: FeaturedProject[] = projects.slice(0, 3).map(project => ({
  ...project,
  thumbnails: project.images,
}));