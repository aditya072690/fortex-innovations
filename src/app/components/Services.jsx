"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaGlobe, FaPalette, FaBullhorn, FaCogs } from "react-icons/fa";

// Deterministic random function to ensure consistent values across server and client
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Enhanced ServiceCard component with animation and hover effects
const ServiceCard = ({ title, description, icon, iconColor, index }) => {
  // Calculate delay for staggered animation
  const delay = index * 0.1;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }
    }
  };

  // Hover animation for beams
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full h-full rounded-xl border border-[rgba(255,255,255,0.3)] bg-gradient-to-br from-white to-slate-50 shadow-lg group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden relative"
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        boxShadow: isHovered ? `0 20px 30px -10px ${iconColor.includes('blue') ? 'rgba(37, 99, 235, 0.2)' : 
                               iconColor.includes('green') ? 'rgba(22, 163, 74, 0.2)' : 
                               iconColor.includes('purple') ? 'rgba(147, 51, 234, 0.2)' : 
                               iconColor.includes('orange') ? 'rgba(234, 88, 12, 0.2)' : 
                               'rgba(220, 38, 38, 0.2)'}` : ''
      }}
    >
      {/* Decorative curved corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gray-100 rounded-bl-full opacity-70 transition-all duration-300 group-hover:opacity-100"></div>
      
      {/* Background glowing effect on hover */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-xl`}
        style={{ 
          background: `radial-gradient(circle at center, ${iconColor.includes('blue') ? '#2563eb' : 
                    iconColor.includes('green') ? '#16a34a' : 
                    iconColor.includes('purple') ? '#9333ea' : 
                    iconColor.includes('orange') ? '#ea580c' : 
                    '#dc2626'} 0%, transparent 70%)` 
        }}
      ></div>

      <div className="h-48 rounded-t-xl z-10 bg-gradient-to-br from-[#00A0A3] to-[#008486] overflow-hidden">
        <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
          
          {/* Animated rings around icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`h-24 w-24 rounded-full border-2 border-white/20 absolute animate-ping-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className={`h-32 w-32 rounded-full border border-white/10 absolute animate-ping-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100`}></div>
          </div>
          
          {/* Service Icon with glow effect */}
          <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2 relative z-10">
            <motion.div 
              className="h-16 w-16 rounded-full flex items-center justify-center bg-white shadow-xl transition-all duration-500"
              whileHover={{ scale: 1.1 }}
              animate={{ 
                boxShadow: isHovered ? [
                  `0 0 0 rgba(255,255,255,0.4)`,
                  `0 0 20px rgba(255,255,255,0.6)`,
                  `0 0 0 rgba(255,255,255,0.4)`
                ] : `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
              }}
              transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            >
              {React.cloneElement(icon, { className: `text-4xl ${iconColor}` })}
            </motion.div>
          </div>
          
          {/* Multiple animated beams */}
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className={`h-40 w-px absolute m-auto z-20 bg-gradient-to-b from-transparent via-cyan-300 to-transparent ${isHovered ? 'animate-pulse-fast' : 'animate-pulse'}`}
              style={{ 
                left: `${50 + (i - 1) * 20}%`,
                opacity: isHovered ? 0.8 : 0.4,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}
          
          {/* Particle effects */}
          {isHovered && [...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full z-10"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0 
              }}
              animate={{ 
                x: (Math.random() - 0.5) * 100, 
                y: (Math.random() - 0.5) * 100, 
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 1.5 + Math.random(), 
                repeat: Infinity, 
                delay: Math.random() * 0.5 
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Service Information with gradient animation */}
      <div className="p-6 relative">
        <h3 className="text-xl font-semibold text-gray-800 pb-2 text-center">
          {title}
        </h3>
        <p className="text-sm font-normal text-gray-700 text-center">
          {description}
        </p>
        
        {/* Bottom highlight line */}
        <motion.div 
          className="h-0.5 w-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent absolute bottom-2 left-1/2 -translate-x-1/2"
          animate={{ width: isHovered ? '50%' : '0%' }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default function Services() {
  const [animateSection, setAnimateSection] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const servicesRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      if (servicesRef.current) {
        const sectionTop = servicesRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          setAnimateSection(true);
        }
      }
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Hydration-safe decorative bubbles with consistent random generation
  const decorativeBubbles = useMemo(() => {
    return [...Array(5)].map((_, i) => {
      const seed = i + 1; // Consistent seed for each bubble
      return {
        width: Math.round(20 + seededRandom(seed * 10) * 100),
        height: Math.round(20 + seededRandom(seed * 20) * 100),
        left: Math.round(seededRandom(seed * 30) * 100),
        top: Math.round(seededRandom(seed * 40) * 100),
        animationDelay: seededRandom(seed * 50) * 5
      };
    });
  }, []);

  // Calculate background glow position based on mouse
  const calculateGlowPosition = () => {
    if (!servicesRef.current || !isClient) return { x: '50%', y: '50%' };
    
    const rect = servicesRef.current.getBoundingClientRect();
    const x = ((mousePosition.x - rect.left) / rect.width) * 100;
    const y = ((mousePosition.y - rect.top) / rect.height) * 100;
    
    return { x: `${Math.round(x)}%`, y: `${Math.round(y)}%` };
  };

  const glowPosition = calculateGlowPosition();

  const services = [
    {
      icon: <FaMobileAlt />,
      iconColor: "text-blue-600",
      title: "📱 Mobile & iOS App Development",
      description: "Native & Cross-Platform Development (Swift, Flutter, React Native). Scalable and High-Performance Mobile Apps with Secure and Seamless UX."
    },
    {
      icon: <FaGlobe />,
      iconColor: "text-green-600",
      title: "🌐 Website Design & Development",
      description: "Custom Websites, E-Commerce, and Web Portals. Frontend & Backend Development (Next.js, React, Node.js) with SEO-Optimized Performance."
    },
    {
      icon: <FaPalette />,
      iconColor: "text-purple-600",
      title: "🎨 UI/UX Design",
      description: "User-Centric Interfaces for Web & Mobile. Wireframing, Prototyping, and Interactive Designs to Enhance Engagement & Retention."
    },
    {
      icon: <FaCogs />,
      iconColor: "text-orange-600",
      title: "🏆 Logo & Brand Identity Design",
      description: "Unique & Memorable Logos, Brand Guidelines & Visual Identity Creation. Professional and Timeless Designs for Lasting Impressions."
    },
    {
      icon: <FaBullhorn />,
      iconColor: "text-red-600",
      title: "📢 Social Media Marketing & Growth",
      description: "Social Media Management (Instagram, LinkedIn, Twitter, Facebook). Paid Advertising & Organic Growth Strategies with Data-Driven Campaigns."
    }
  ];

  // Split services into two rows
  const topRowServices = services.slice(0, 3);
  const bottomRowServices = services.slice(3);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section 
      id="services" 
      ref={servicesRef}
      className="relative bg-yellow-50 pt-42 pb-32 overflow-hidden"
    >
      {/* Interactive Background Glow */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none transition-all duration-1000"
        style={{
          background: isClient 
            ? `radial-gradient(circle at ${glowPosition.x} ${glowPosition.y}, rgba(0, 160, 163, 0.15) 0%, transparent 60%)` 
            : 'none'
        }}
      ></div>
    
      {/* Top Wave with Animation */}
      <div className="absolute top-0 left-0 w-full -translate-y-22 z-10 overflow-hidden py-10">
        <motion.svg 
          viewBox="0 0 1440 320" 
          className="w-full h-auto"
          initial={{ y: -20, opacity: 0.8 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <motion.path
            fill="#00A0A3"
            fillOpacity="1"
            d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,192C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,0L0,0Z"
            initial={{ y: 10 }}
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.path>
        </motion.svg>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isClient && decorativeBubbles.map((bubble, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-cyan-500 opacity-10"
            style={{
              width: `${bubble.width}px`,
              height: `${bubble.height}px`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, seededRandom(i * 60) * 20 - 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 5 + seededRandom(i * 70) * 10,
              repeat: Infinity,
              delay: bubble.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Services Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={animateSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent inline-block">
            🚀 Services We Offer
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-2"></div>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            We provide a comprehensive suite of services to take your business to the next level,
            crafted with creativity and technical excellence.
          </p>
        </motion.div>

        {/* Services Layout - 3 in top row, 2 in bottom row with consistent sizing */}
        <motion.div 
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={animateSection ? "visible" : "hidden"}
        >
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {topRowServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconColor={service.iconColor}
                index={index}
              />
            ))}
          </div>

          {/* Bottom Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bottomRowServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconColor={service.iconColor}
                index={index + 3} // Adjust index for staggered animation
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}