"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Aboutpage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Full-screen overlay for the animation */}
      <motion.div
        initial={{ y: 0 }} 
        animate={{ y: "-100%" }} 
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-1/2 bg-gray-900 z-50"
      />
      <motion.div
        initial={{ y: 0 }} 
        animate={{ y: "100%" }} 
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-700 z-50"
      />

      {/* Page content - Appears after animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="flex h-screen bg-white text-black"
        onMouseMove={handleMouseMove}
      >
        {/* Left sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="flex flex-col items-center justify-between bg-gray-100 h-screen w-[100px] py-10"
        >
          <div className="text-4xl font-bold mt-5">T.</div>

          <div className="flex flex-col items-center space-y-16">
            <div className="[writing-mode:vertical-lr] uppercase tracking-widest text-gray-500 cursor-pointer hover:text-black">
              Contact
            </div>
            <div className="[writing-mode:vertical-lr] uppercase tracking-widest text-gray-500 cursor-pointer hover:text-black">
              Conditions
            </div>
            <div className="[writing-mode:vertical-lr] uppercase tracking-widest text-gray-500 cursor-pointer hover:text-black">
              Portfolio
            </div>
            <div className="[writing-mode:vertical-lr] uppercase font-bold text-black">
              About
            </div>
          </div>
        </motion.div>

        {/* Right content area with moving background effect */}
        <motion.div
          className="flex-1 h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/Images/background.jpg')",
          }}
          animate={{
            backgroundPosition: `${mousePosition.x / 100}px ${mousePosition.y / 50}px`,
          }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="w-full h-[100px] flex flex-row items-center justify-between px-8"
          >
            <p className="text-white text-2xl font-sans">Tabish Hussain</p>

            <div className="flex flex-row items-center space-x-4 text-white text-2xl">
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-600" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.7 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-gray-500" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="hover:text-red-500" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.9 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-blue-600" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
