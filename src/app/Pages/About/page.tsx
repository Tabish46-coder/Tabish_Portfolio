"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Aboutpage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-1/2 bg-gray-900 z-50"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-700 z-50"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
        className="flex h-screen bg-white text-black"
        onMouseMove={handleMouseMove}
      >
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
            <p className="text-white text-2xl font-sans font-medium">Tabish Hussain</p>

            <div className="flex flex-row items-center space-x-4 text-white text-2xl">
              <motion.a
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 5, delay: 2 }}
                href="https://www.linkedin.com/in/tabish-hussain-3b759b318/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-600" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.7 }}
                href="https://github.com/Tabish46-coder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-gray-500" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="hover:text-red-500" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.9 }}
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-blue-600" />
              </motion.a>
            </div>
          </motion.div>

          <div className="ml-60 mt-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.9 }}
            >
              <h1 className="text-white text-9xl font-sans font-bold">Hello</h1>
              <p className="text-white text-8x1 font-sans font-bold ml-20">
                ___________________________________
              </p>
              <p className="text-gray-500 text-4x1 font-sans ml-20 font-medium mt-10">
                <Typewriter
                  words={[
                    "I specialize in developing responsive, secure,",
                    "and fully customized mobile apps using React Native,",
                    "with a robust backend powered by Flask and .NET.",
                    "I also have strong expertise in Next.js for building scalable web applications.",
                  ]}
                  loop={10}
                  cursor
                  cursorStyle="_"
                  typeSpeed={40}
                  deleteSpeed={20}
                  delaySpeed={1000}
                />
              </p>
            </motion.div>
          </div>

          <div className="mt-40 flex flex-row">
            <div>
            <p className="text-white font-bold font-serif ml-[900px]">Email:</p>
            <p className="mt-5 text-white font-serif ml-[900px]">tabishhussain387@gmail.com</p>
            </div>
            <div className="ml-20">
              <p className="text-white font-bold font-serif">Phone No:</p>
              <p className="text-white font-serif mt-5">+92340-0159380</p>
            </div>
           
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
