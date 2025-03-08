"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Define project types
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  highlighted: boolean;
}

export default function Portfolio() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState<string | null>("turnadon");

  const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  // Project data
  const projects: Project[] = [
    {
      id: "turnadon",
      title: "Web sites",
      description: "able to create any kind of website",
      image: "/Images/website.jpg",
      highlighted: true
    },
    {
      id: "patacrepes",
      title: "Mobile Apps",
      description: "able to create in react native & flutter",
      image: "/Images/attendance.jpg",
      highlighted: false
    },
    {
      id: "lesponchos",
      title: "Coding Guidance",
      description: "Can Provide Programming Guidence",
      image: "/Images/coding.jpg",
      highlighted: false
    },
    {
      id: "lavoieouverte",
      title: "Easy Multitasking",
      description: "Learn multitasking",
      image: "/Images/multitasking.jpg",
      highlighted: false
    },
    {
      id: "lescontes",
      title: "Java Script Expert",
      description: "Become a java script expert",
      image: "/Images/javascript.png",
      highlighted: false
    },
    {
      id: "douvres",
      title: "React-Native Expert",
      description: "Become a React Native Expert",
      image: "/Images/react.jpg",
      highlighted: false
    },
    {
      id: "antoiner",
      title: "Coding Assignments",
      description: "Able to do any kind of coding assignments",
      image: "/Images/assignments.jpg",
      highlighted: false
    },
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-1/2 bg-gray-900 z-50"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-700 z-50"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="flex h-screen bg-white text-black"
        onMouseMove={handleMouseMove}
      >
        {/* Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="flex flex-col items-center justify-between bg-gray-100 h-screen w-[100px] py-10 border-r border-gray-200"
        >
          <div className="text-4xl font-bold mt-5">B.</div>

          <div className="flex flex-col items-center space-y-16">
            <div className="[writing-mode:vertical-lr] uppercase tracking-widest text-gray-500 cursor-pointer hover:text-black">
              Contact
            </div>
            <div className="[writing-mode:vertical-lr] uppercase tracking-widest text-gray-500 cursor-pointer hover:text-black">
              Conditions
            </div>
            <div className="[writing-mode:vertical-lr] uppercase font-bold text-black">
            Expertise
            </div>
            <div className="[writing-mode:vertical-lr] uppercase tracking-widest text-gray-500 cursor-pointer hover:text-black" onClick={() => router.push("/Pages/About")}>
              About
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="text-xs uppercase text-gray-500">FR</div>
            <div className="text-xs uppercase font-bold">EN</div>
          </div>
        </motion.div>

        {/* Project list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-1/3 h-screen py-16 px-8 overflow-y-auto"
        >
          <div className="space-y-10">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="cursor-pointer"
                onMouseEnter={() => setActiveProject(project.id)}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start">
                  {project.id === activeProject && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-amber-500 mr-2"
                    >
                      —
                    </motion.div>
                  )}
                  <div>
                    <h3 className={`text-2xl font-medium ${project.id === activeProject ? 'text-amber-500' : 'text-gray-700'}`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-1">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project display area - Now with proper image sizing */}
        <motion.div className="w-2/3 h-screen relative overflow-hidden bg-white">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeProject === project.id ? 1 : 0,
                scale: activeProject === project.id ? 1 : 1.05
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
              style={{ 
                zIndex: activeProject === project.id ? 10 : 0,
              }}
            >
              {/* Using Next.js Image component with proper sizing */}
              <div className="relative w-full h-[750px] flex items-center justify-center p-6">
                <div className="relative w-full h-full max-w-4xl max-h-4xl overflow-hidden">
                  {/* Fallback if image fails */}
                  <div className="absolute inset-0 bg-white flex items-center justify-center">
                    <div className="text-blue-300 text-xl">Loading image...</div>
                  </div>
                  
                  {/* Main project image - using Next.js Image for better resizing */}
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={project.id === activeProject}
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = "/Images/placeholder.jpg";
                      }}
                    />
                  </div>
                  
                  {/* Overlay with project title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h2 className="text-white text-2xl font-bold">{project.title}</h2>
                    <p className="text-white/80 mt-2">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}