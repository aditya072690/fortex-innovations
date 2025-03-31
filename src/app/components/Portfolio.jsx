"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
  {
    id: "Jack-Rose-Wedding",
    title: "The Wedding of Jack & Rose",
    description: "A romantic wedding photo capturing Jack and Rose in a natural, rustic setting with soft lighting.",
    fullDescription: "Jack & Rose’s wedding website captures romance in a serene natural landscape, with the couple walking through pink-hued grasses. A soft, handwritten font and earthy tones create an intimate, nostalgic feel, while a minimalist design keeps the focus on their love story.",
    image: "/images/projects/JackRoseWedding.png",
    tags: ["wedding", "nature", "couple", "2017", "photography"],
    technologies: ["Wedding Photography", "Landscape Design", "Artistic Styling"],
    clientName: "Personal Project",
    category: "events"
  },
  {
    id: "Jack-Wood-Rose-Thomas-Wedding",
    title: "Jack Wood & Rose Thomas Wedding",
    description: "A wedding website for Jack Wood and Rose Thomas, showcasing their destination wedding in Boracay.",
    fullDescription: "The Nuptial wedding website beautifully celebrates Jack Wood and Rose Thomas’s union on December 28, 2017, in Boracay. With circular profile images, a soft pink theme, and playful cursive text, it creates a warm, intimate, and inviting digital celebration.",
    image: "/images/projects/JackWoodRoseThomas.png",
    tags: ["wedding", "couple", "destination", "Boracay", "2017"],
    technologies: ["Wedding Website Design", "Responsive Layout", "Circular Profile Design"],
    clientName: "Personal Project",
    category: "events"
  },
  {
    id: "Love-Wedding-Couple",
    title: "Love Wedding Couple Groom Woman",
    description: "A wedding website focusing on the couple with a split-screen design and romantic imagery.",
    fullDescription: "The Settle wedding website features a bold split-screen design with striking red and navy tones. Bold typography contrasts with an intimate couple’s photo, while a 'Contact Us' button enhances engagement. A minimalist layout emphasizes the couple’s love story.",
    image: "/images/projects/LoveWeddingCouple.png",
    tags: ["wedding", "couple", "groom", "bride", "love"],
    technologies: ["Web Design", "Wedding Portfolio", "Responsive Layout"],
    clientName: "Personal Project",
    category: "events"
  },
  {
    id: "Beach-Wedding-Website",
    title: "Love Wedding Website",
    description: "A wedding website showcasing a beach ceremony with a macramé backdrop and a couple embracing.",
    fullDescription: "This wedding website beautifully showcases a bohemian beach ceremony, featuring a couple beneath a macramé backdrop. Geometric red hearts add a romantic touch, while sections like Gallery, RSVP, and Gifts enhance guest engagement. A 'Login' option suggests interactive features.",
    image: "/images/projects/BeachWedding.png",
    tags: ["beach wedding", "macramé", "ocean", "ceremony", "romantic"],
    technologies: ["Responsive Web Design", "Wedding Website", "Event Landing Page"],
    clientName: "Personal Project",
    category: "events"
  },
  {
    id: "John-Jane-Wedding",
    title: "John & Jane Wedding Moment",
    description: "A romantic wedding photograph capturing an intimate moment between the couple, with a soft, elegant aesthetic.",
    fullDescription: "John & Jane’s wedding website captures a tender kiss beneath a flowing veil, highlighting their deep connection. A sepia-toned palette and minimalist typography create a timeless elegance, while an 'RSVP' button adds interactivity for guests.",
    image: "/images/projects/JohnJaneWedding.png",
    tags: ["wedding", "photography", "intimate moment", "bride", "groom"],
    technologies: ["Photography", "Wedding Styling", "Veil Design"],
    clientName: "Personal Project",
    category: "events"
  },
  {
    id: "Anjelina-Jack-Wedding",
    title: "Anjelina & Jack Wedding Ceremony",
    description: "A wedding website for Anjelina & Jack, showcasing their wedding ceremony on January 14, 2020.",
    fullDescription: "The Sunshine wedding website beautifully celebrates Anjelina & Jack’s union on January 14, 2020. Featuring a romantic couple’s photo, elegant typography, and a warm, minimalist design, it offers sections like Our Story and Gallery. A 'Get Married' call-to-action enhances its celebratory feel.",
    image: "/images/projects/AnjelinaJackWedding.png",
    tags: ["wedding", "couple", "ceremony", "2020", "celebration"],
    technologies: ["Wedding Website Design", "Responsive Layout", "Photography Integration"],
    clientName: "Personal Project",
    category: "events"
  },
  {
    id: "Digital-Design-Conference",
    title: "Digital Design Conference 2019 NYC",
    description: "A landing page for a Digital Design Conference in New York City, featuring a vibrant gradient background and clean typography.",
    fullDescription: "Wemeet's Digital Design Conference 2019 landing page features a dynamic gradient background, bold white typography, and a user-friendly navigation menu. A prominent 'Buy Ticket' button encourages action, while an 'Add To Your Calendar' option enhances convenience.",
    image: "/images/projects/DigitalDesignConference.png",
    tags: ["conference", "digital design", "event", "NYC", "2019"],
    technologies: ["Web Design", "Event Landing Page", "Responsive Design"],
    clientName: "Digital Design Conference",
    category: "events"
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "web", name:"Web Development" },
    { id: "events", name: "Events & Entertainment" },
    { id: "utilities", name: "Utilities" }
  ];

  // Category filtering
  useEffect(() => {
    setFilteredProjects(
      activeCategory === "all" 
        ? projects 
        : projects.filter(project => project.category === activeCategory)
    );
  }, [activeCategory]);

  // Animation variants
  const cardVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)",
      transition: { duration: 0.3 }
    },
    initial: { 
      opacity: 0,
      y: 20 
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="portfolio" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-gray-800 py-20 overflow-hidden">
      {/* Background SVG and Gradient Elements */}
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
          className="absolute top-20 right-20 md:top-40 md:right-40 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-blue-300 to-teal-200 blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 md:bottom-40 md:left-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-teal-200 to-blue-300 blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 relative inline-block">
            Our Projects
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 transform origin-left"></span>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Explore our innovative projects that showcase our expertise in creating digital solutions that transform businesses.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-10 px-2"
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

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.1 
              }
            }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium bg-blue-500 px-3 py-1.5 rounded-full">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            className="w-full max-w-6xl bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side - Project Image */}
            <div className="flex items-center justify-center p-4">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="max-w-full max-h-[700px] object-contain"
              />
            </div>
            
            {/* Right Side - Project Details */}
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2">Project Description</h3>
                <p className="text-sm md:text-base text-gray-600">{selectedProject.fullDescription}</p>
              </div>
              
              <div className="mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 md:px-3 md:py-1 bg-red-50 text-red-600 rounded-full text-xs md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2">Project Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 md:px-3 md:py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <button 
                  className="w-full bg-red-500 text-white py-2 md:py-3 rounded-md hover:bg-red-600 transition text-sm md:text-base"
                  onClick={() => setSelectedProject(null)}
                >
                  Close Project
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}