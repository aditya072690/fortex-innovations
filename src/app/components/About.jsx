"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const sectionRef = useRef(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.02, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity,
        repeatType: "reverse" 
      }
    }
  };

  return (
    <section ref={sectionRef} id="about" className="relative bg-yellow-50 py-30 overflow-hidden">
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

      {/* About Us Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
            About Us
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 transform origin-left"></span>
          </h2>
          <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
            Fortex Innovation was born in the vibrant city of Vadodara, Gujarat, with a simple yet powerful vision: to help businesses navigate the complex digital landscape with ease and confidence. As a team of passionate tech enthusiasts and creative minds, we don't just build digital products—we craft experiences that connect, engage, and inspire.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mt-14 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500"
            variants={fadeIn}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
              <span className="text-blue-500 mr-2">🚀</span>
              Our Mission
            </h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              We're on a mission to democratize digital excellence. Every day, we work to empower businesses—from ambitious startups to established enterprises—with innovative, scalable, and high-performance digital solutions that not only enhance their online presence but fundamentally transform how they operate and connect with their audiences. We believe technology should work for people, not the other way around.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-teal-500"
            variants={fadeIn}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
              <span className="text-teal-500 mr-2">👁️</span>
              Our Vision
            </h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Looking ahead, we envision a world where digital transformation isn't just for those with deep pockets but accessible to anyone with a dream. We're building toward becoming a global leader in technology-driven solutions that break down barriers, level the playing field, and enable businesses of all sizes to thrive in an increasingly digital world. Our horizon isn't limited by geography—it's shaped by possibility.
            </p>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center flex justify-center items-center">
            <span className="mr-2">✨</span>
            Our Core Values
            <span className="ml-2">✨</span>
          </h3>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
            variants={staggerChildren}
          >
            <motion.div 
              className="p-6 bg-white rounded-lg shadow relative overflow-hidden group"
              variants={fadeIn}
              whileHover="animate"
              initial="initial"
              animate={pulseAnimation}
            >
              <div className="absolute w-1 h-full bg-blue-500 left-0 top-0 group-hover:w-2 transition-all duration-300"></div>
              <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">🔹 Innovation</h4>
              <p className="text-gray-700 mt-3">
                We thrive at the intersection of possibility and practicality, constantly pushing boundaries to deliver solutions that aren't just cutting-edge but cutting through the noise—creating meaningful digital experiences that stand the test of time.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white rounded-lg shadow relative overflow-hidden group"
              variants={fadeIn}
              whileHover="animate"
              initial="initial"
              animate={pulseAnimation}
            >
              <div className="absolute w-1 h-full bg-green-500 left-0 top-0 group-hover:w-2 transition-all duration-300"></div>
              <h4 className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300">🔹 Integrity</h4>
              <p className="text-gray-700 mt-3">
                Trust is earned in drops and lost in buckets. That's why everything we do is anchored in transparency, honesty, and ethical business practices. We believe in straight talk, fair deals, and promises kept—no exceptions.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white rounded-lg shadow relative overflow-hidden group"
              variants={fadeIn}
              whileHover="animate"
              initial="initial"
              animate={pulseAnimation}
            >
              <div className="absolute w-1 h-full bg-purple-500 left-0 top-0 group-hover:w-2 transition-all duration-300"></div>
              <h4 className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">🔹 Customer-Centric</h4>
              <p className="text-gray-700 mt-3">
                Your growth story is our north star. We don't just work for you—we work with you, immersing ourselves in your challenges, celebrating your successes, and constantly asking "how can we make this better for the people who matter most: your customers."
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white rounded-lg shadow relative overflow-hidden group"
              variants={fadeIn}
              whileHover="animate"
              initial="initial"
              animate={pulseAnimation}
            >
              <div className="absolute w-1 h-full bg-orange-500 left-0 top-0 group-hover:w-2 transition-all duration-300"></div>
              <h4 className="text-lg font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-300">🔹 Excellence</h4>
              <p className="text-gray-700 mt-3">
                Good enough is never good enough. We approach each project with painstaking attention to detail, relentless improvement, and a commitment to craftsmanship that borders on obsession. The difference between ordinary and extraordinary is that little "extra"—and we're all about the extra.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Team Spirit Quote */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl shadow-sm max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl italic text-gray-800">
            "Behind every line of code and pixel we craft is a team that believes in the power of digital to transform not just businesses, but lives. We're builders at heart, dreamers by nature, and partners by choice."
          </p>
          <p className="text-right mt-4 text-gray-600 font-medium">— The Fortex Innovation Team</p>
        </motion.div>
      </div>

      {/* Bottom Wave Background - Animated */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <motion.path
            initial={{ y: 20, opacity: 0.7 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
            fill="#FDF8E8"
            fillOpacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,101.3C480,96,600,96,720,112C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  );
}