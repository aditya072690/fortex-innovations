"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Expanded project data with more details
const projects = [
  {
    id: "ArtXibition",
    title: "ArtXibition - The Sunny Hill Festival 2025",
    description: "An art exhibition and festival website with countdown timer to opening day and ticket purchase options.",
    fullDescription: "ArtXibition is hosting The Sunny Hill Festival 2025, opening on Thursday, March 31st. The website features a countdown timer showing 15 days, 22 hours, 31 minutes, and 7 seconds until the event. Navigation includes Home, About Us, Rent Venue, Shows & Events, and Tickets sections. A prominent 'Purchase Tickets' button is displayed on the homepage.",
    image: "/images/projects/ArtXibition.png",
    tags: ["Blockchain", "Fintech", "Web3", "Solana"],
    technologies: ["React", "Solana", "Rust", "TypeScript", "AWS"],
    clientName: "CryptoEdge Financial",
    category: "events"
  },
  {
    id: "Weight Swap",
    title: "Weight Swap",
    description: "A platform connecting travelers with unused luggage capacity to people looking to send items without paying excess baggage fees.",
    fullDescription: "Weight Swap is a revolutionary e-business platform connecting travelers worldwide to trade excess baggage capacity. The concept allows travelers with unused luggage weight to connect with individuals who need to send items but want to avoid excess baggage fees or need urgent delivery. The website features prominent 'I AM TRAVELING' and 'I WANT TO SEND' buttons, and appears to be set in a train station environment.",
    image: "/images/projects/WeightSwap.png",
    tags: ["AI", "Machine Learning", "UX", "NLP"],
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "MongoDB"],
    clientName: "TechSupport Pro",
    category: "web"
  },
  {
    id: "Tree Heaven",
    title: "Tree Heaven",
    description: "An online store selling fully-grown trees for people who don't want to wait for saplings to mature.",
    fullDescription: "Tree Heaven is an e-commerce website selling mature trees for homes. Their main value proposition is providing grown trees so customers don't have to wait for them to grow. The minimalist website features navigation for Home, About, Products, Cart, and Contact Us sections. The homepage displays a pine tree image and includes social media links with an 'Explore' button.",
    image: "/images/projects/TreeHeaven.png",
    tags: ["E-Commerce", "AR/VR", "UI Design", "Mobile"],
    technologies: ["Next.js", "Three.js", "TailwindCSS", "Node.js", "PostgreSQL"],
    clientName: "FashionFuture",
    category: "web"
  },
  // {
  //   id: "health-app",
  //   title: "Health Monitoring App",
  //   description: "A comprehensive health tracking solution with wearable integration and personalized insights.",
  //   fullDescription: "This health monitoring application connects with popular wearable devices to track vital signs, activity levels, and sleep patterns. It provides users with personalized health insights, custom workout plans, and nutrition recommendations based on their goals and medical history. The app includes telemedicine capabilities, medication reminders, and secure sharing of health data with healthcare providers.",
  //   image: "/images/projects/5.png",
  //   tags: ["Healthcare", "IoT", "Mobile", "Data Analytics"],
  //   technologies: ["React Native", "Firebase", "Swift", "Kotlin", "TensorFlow Lite"],
  //   clientName: "HealthSync",
  //   category: "healthcare"
  // },
  // {
  //   id: "smart-city",
  //   title: "Smart City Dashboard",
  //   description: "An integrated management system for urban infrastructure monitoring and optimization.",
  //   fullDescription: "This comprehensive smart city solution aggregates data from thousands of IoT sensors across urban environments to optimize traffic flow, energy usage, waste management, and public safety. The real-time dashboard provides city administrators with actionable insights and automated responses to various urban scenarios. The system has helped reduce traffic congestion by 27% and energy consumption by 18% in pilot cities.",
  //   image: "/images/projects/5.png",
  //   tags: ["IoT", "Smart City", "Data Visualization", "AI"],
  //   technologies: ["React", "D3.js", "Python", "TensorFlow", "AWS IoT", "TimescaleDB"],
  //   clientName: "MetroTech Solutions",
  //   category: "iot"
  // },
];

// Filter categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "web", name: "Web Development" },
  { id: "events", name: "Events & Entertainment" },
  { id: "utilities", name: "Utilities" }
];

// { id: "productivity", name: "Productivity Tools" },
// { id: "education", name: "Educational Apps" },
// { id: "ecommerce", name: "E-Commerce" },

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [viewMode, setViewMode] = useState("carousel"); // carousel, grid, list
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.2 });
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  // Handle category filter
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (activeCategory === "all") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.category === activeCategory));
      }
      setIsLoading(false);
    }, 500);
  }, [activeCategory]);

  // Detect screen sizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Pause autoplay when user interacts with a project
  useEffect(() => {
    if (selectedProject && swiper && isAutoplayEnabled) {
      swiper.autoplay.stop();
      setIsAutoplayEnabled(false);
    } else if (!selectedProject && swiper && !isAutoplayEnabled) {
      swiper.autoplay.start();
      setIsAutoplayEnabled(true);
    }
  }, [selectedProject, swiper, isAutoplayEnabled]);

  // Counter animation for stats
  const Counter = ({ value, label }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isInView) {
        let start = 0;
        // Get numeric part of the value
        const end = parseInt(value.replace(/[^0-9]/g, ''));
        const duration = 2000;
        const increment = Math.ceil(end / (duration / 16));
        
        const timer = setInterval(() => {
          start += increment;
          if (start > end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 16);
        
        return () => clearInterval(timer);
      }
    }, [isInView, value]);
    
    return (
      <div className="text-center">
        <div className="text-4xl font-bold text-blue-600">{count}{value.includes("%") ? "%" : "+"}</div>
        <div className="text-sm text-gray-600 mt-1">{label}</div>
      </div>
    );
  };

  // Get slidesPerView based on screen size
  const getSlidesPerView = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <section id="portfolio" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-gray-800 py-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full opacity-30">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <motion.path
              initial={{ y: -20, opacity: 0.7 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              fill="#3B82F6"
              fillOpacity="0.3"
              d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,186.7C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L0,320Z"
            />
          </svg>
        </div>
        
        <motion.div 
          className="absolute top-40 right-40 w-64 h-64 rounded-full bg-gradient-to-r from-blue-300 to-teal-200 blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-teal-200 to-blue-300 blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
            Our Projects
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 transform origin-left"></span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Explore our innovative projects that showcase our expertise in creating digital solutions that transform businesses.
          </p>
        </motion.div>

        {/* Category Filter - Responsive */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Display */}
        {viewMode === 'carousel' && (
          <div className="w-full px-2 md:px-4">
            <Swiper
              onSwiper={setSwiper}
              modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={getSlidesPerView()}
              spaceBetween={isMobile ? 10 : 20}
              autoplay={isAutoplayEnabled ? { delay: 3000, disableOnInteraction: false } : false}
              pagination={{ clickable: true }}
              navigation
              className="mySwiper pb-12 md:pb-16"
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <motion.div 
                    className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer h-56 md:h-64 lg:h-72"
                    onClick={() => setSelectedProject(project)}
                    variants={cardVariant}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-white bg-opacity-50 shadow-md flex flex-col justify-center items-center text-black p-4 text-center">
                      <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
                      <p className="mt-2 text-xs md:text-sm lg:text-base hidden sm:block">{project.description}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      {/* Project Details Modal - Transparent Background */}
      {selectedProject && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50 p-4"
          onClick={() => setSelectedProject(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-40 sm:h-48 object-cover" />
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold">{selectedProject.title}</h3>
              <p className="mt-2 text-gray-700 text-sm sm:text-base">{selectedProject.fullDescription}</p>
              <div className="mt-4">
                <h4 className="font-semibold">Technologies Used:</h4>
                <ul className="list-disc list-inside">
                  {selectedProject.technologies.map((tech) => (
                    <li key={tech} className="text-gray-600 text-sm sm:text-base">{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex justify-center sm:justify-start">
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}