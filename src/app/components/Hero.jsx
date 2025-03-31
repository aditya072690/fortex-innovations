"use client";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const buttonVariants = {
    initial: { 
      scale: 1,
      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
    },
    hover: { 
      scale: 1.05,
      boxShadow: '0 15px 20px -5px rgba(37,99,235,0.3)',
      transition: { 
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }
    },
    tap: { 
      scale: 0.95,
      boxShadow: '0 5px 10px -3px rgba(0,0,0,0.1)'
    }
  };

  return (
    <section id="hero" className="relative bg-yellow-50 py-20 overflow-hidden">
      {/* Top Wave Background - Animated */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <motion.path
            initial={{ y: -20, opacity: 0.7 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            fill="#FDF8E8"
            fillOpacity="0.5"
            d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,186.7C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left py-16 md:py-24"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            variants={fadeIn}
          >
            Welcome to Fortex Innovation
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Innovate. Create. Elevate.
            </span>
          </motion.h1>
          
          <motion.div 
            className="relative"
            variants={fadeIn}
          >
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 md:block hidden"></span>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-700 mt-6"
            variants={fadeIn}
          >
            We are a cutting-edge technology solutions provider specializing in web development, mobile app development, UI/UX design, branding, and digital marketing. At Fortex Innovation, we combine creativity with technology to transform ideas into reality.
          </motion.p>
          
          {/* Updated button with enhanced hover animation */}
          <Link href="/services">
            <motion.button 
              className="mt-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 flex items-center gap-2 rounded-full text-lg font-medium shadow-lg cursor-pointer relative transition-colors duration-300 overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="initial"
            >
              {/* Hover effect background */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
              />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                LET'S BUILD TOGETHER 
                <motion.span
                  className="transform transition-transform duration-300 group-hover:translate-x-1"
                >
                  <FaArrowRight />
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Side Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img 
            src="/images/hero-illustration.png" 
            alt="Fortex Innovation" 
            className="w-full max-w-md md:max-w-lg"
            initial={{ y: 20 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>

      {/* Waves SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <motion.path
            initial={{ y: 10, opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            fill="#2D7682"
            fillOpacity="1"
            d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,186.7C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}