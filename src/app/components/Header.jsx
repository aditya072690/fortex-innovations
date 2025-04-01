// "use client";
// import { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link as ScrollLink } from "react-scroll";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");

//   // Track scroll position for header styling
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle section tracking
//   useEffect(() => {
//     const handleSectionVisibility = () => {
//       const sections = ["hero", "about", "services", "portfolio", "contact"];
//       const scrollPosition = window.scrollY + 300;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const top = element.offsetTop;
//           const height = element.offsetHeight;

//           if (scrollPosition >= top && scrollPosition < top + height) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleSectionVisibility);
//     return () => window.removeEventListener("scroll", handleSectionVisibility);
//   }, []);

//   // Navigation items
//   const navItems = [
//     { id: "hero", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "services", label: "Services" },
//     { id: "portfolio", label: "Projects" },
//     { id: "contact", label: "Contact" }
//   ];

//   return (
//     <header
//       className={`fixed top-0 w-full py-4 px-6 md:px-12 flex justify-between items-center z-50 transition-all duration-300 ${
//         scrolled ? "bg-yellow-50 bg-opacity-90 backdrop-blur-md shadow-md" : "bg-transparent"
//       }`}
//     >
//       {/* Logo on the Left */}
//       <motion.div
//         className="flex-shrink-0 lg:px-20"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img
//           src="/Logo/logo.png"
//           alt="Fortex Innovation Logo"
//           className="h-10 md:h-12 lg:h-14 w-auto"
//         />
//       </motion.div>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
//         <ul className="flex space-x-6 lg:space-x-8 text-black text-lg font-medium">
//           {navItems.map((item) => (
//             <motion.li
//               key={item.id}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <ScrollLink
//                 to={item.id}
//                 smooth={true}
//                 duration={800}
//                 offset={item.id === "hero" ? 0 : -80}
//                 className={`cursor-pointer relative px-2 py-1 transition-colors duration-300 ${
//                   activeSection === item.id ? "text-cyan-500" : "hover:text-cyan-300"
//                 }`}
//               >
//                 {item.label}
//                 {activeSection === item.id && (
//                   <motion.span
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 rounded-full"
//                     layoutId="activeNavIndicator"
//                   />
//                 )}
//               </ScrollLink>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* Mobile Menu Button */}
//       <motion.button
//         className="md:hidden text-black text-2xl focus:outline-none z-50 p-2 bg-yellow-50 bg-opacity-80 backdrop-blur-sm rounded-full"
//         onClick={() => setIsOpen(!isOpen)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </motion.button>

//       {/* Creative Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="fixed inset-0 bg-yellow-50 bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center md:hidden z-40"
//             initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
//             animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
//             exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           >
//             <motion.ul
//               className="flex flex-col items-center space-y-6 py-8 text-black text-xl font-medium"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: {
//                   opacity: 1,
//                   transition: {
//                     staggerChildren: 0.1,
//                     delayChildren: 0.2
//                   }
//                 }
//               }}
//             >
//               {navItems.map((item, index) => (
//                 <motion.li
//                   key={item.id}
//                   variants={{
//                     hidden: { opacity: 0, y: 20 },
//                     visible: { opacity: 1, y: 0 }
//                   }}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <ScrollLink
//                     to={item.id}
//                     smooth={true}
//                     duration={800}
//                     offset={item.id === "hero" ? 0 : -80}
//                     className={`cursor-pointer px-6 py-2 relative`}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <span className={`relative z-10 ${activeSection === item.id ? "text-cyan-500" : ""}`}>
//                       {item.label}
//                     </span>
//                     {activeSection === item.id && (
//                       <motion.div
//                         className="absolute inset-0 bg-cyan-100 rounded-full -z-0"
//                         layoutId="mobileActiveNavIndicator"
//                       />
//                     )}
//                   </ScrollLink>
//                 </motion.li>
//               ))}
//             </motion.ul>

//             {/* Decorative elements */}
//             <motion.div
//               className="absolute top-20 left-8 w-24 h-24 rounded-full bg-cyan-100 bg-opacity-50 -z-10"
//               animate={{
//                 scale: [1, 1.2, 1],
//                 rotate: [0, 45, 0],
//                 opacity: [0.3, 0.5, 0.3]
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }}
//             />
//             <motion.div
//               className="absolute bottom-20 right-8 w-32 h-32 rounded-full bg-cyan-200 bg-opacity-40 -z-10"
//               animate={{
//                 scale: [1, 1.3, 1],
//                 rotate: [0, -45, 0],
//                 opacity: [0.2, 0.4, 0.2]
//               }}
//               transition={{
//                 duration: 10,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 delay: 1
//               }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", navigate: "/" },
    { id: "about", label: "About", navigate: "/about" },
    { id: "services", label: "Services", navigate: "/services" },
    { id: "portfolio", label: "Projects", navigate: "/portfolio" },
    { id: "contact", label: "Contact", navigate: "/contact" },
  ];

  return (
    <>
      {/* Add spacer to prevent content from being hidden under the fixed header */}
      <div className="h-8 md:h-10 w-full"></div>

      <header
        className={`fixed top-0 w-full py-3 px-4 md:px-12 flex items-center z-50 bg-yellow-50 bg-opacity-90 backdrop-blur-md shadow-md transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        {/* Logo with click handler */}
        <motion.div
          className="flex-shrink-0 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.push(`/`)}
        >
          <img
            src="/Logo/logo.png"
            alt="Fortex Innovation Logo"
            className="h-8 md:h-10 lg:h-12 w-auto"
          />
        </motion.div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center space-x-6 lg:space-x-8 text-black text-lg font-medium">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => router.push(`${item.navigate}`)}
                  className={`cursor-pointer relative px-2 py-1 transition-colors duration-300 ${
                    pathname == item.navigate
                      ? "text-cyan-500"
                      : "hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                  {pathname == item.navigate && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 rounded-full"
                      layoutId="activeNavIndicator"
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button - Always visible and above the menu */}
        <div className="md:hidden ml-auto">
          <motion.button
            className="text-black text-2xl focus:outline-none z-60 p-2 bg-yellow-50 bg-opacity-80 backdrop-blur-sm rounded-full fixed top-3 right-4"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isOpen ? <FaTimes className="text-cyan-500" /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Navigation - Full screen with all menu items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-yellow-50 bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center md:hidden z-40"
              initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.ul
                className="flex flex-col bg-yellow-50 items-center pt-60 py-8 text-black text-xl font-medium w-full px-6 mt-16"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <button
                      onClick={() => {
                        router.push(`${item.navigate}`);
                        setIsOpen(false);
                      }}
                      className="cursor-pointer px-6 py-2 relative w-full text-center"
                    >
                      <span
                        className={`relative z-10 ${
                          pathname == item.navigate ? "text-cyan-500" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                      {pathname == item.navigate && (
                        <motion.div
                          className="absolute inset-0 bg-cyan-100 rounded-full -z-0"
                          layoutId="mobileActiveNavIndicator"
                        />
                      )}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-20 left-8 w-24 h-24 rounded-full bg-cyan-100 bg-opacity-50 -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 45, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-8 w-32 h-32 rounded-full bg-cyan-200 bg-opacity-40 -z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -45, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}