// "use client";
// import { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";

// export default function Header({ activePage, setActivePage }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { id: "home", label: "Home", navigate: "/" },
//     { id: "about", label: "About", navigate: "/about" },
//     { id: "services", label: "Services", navigate: "/services" },
//     { id: "portfolio", label: "Projects", navigate: "/portfolio" },
//     { id: "contact", label: "Contact", navigate: "/contact" },
//   ];

//   // Function to handle logo click
//   const handleLogoClick = () => {
//     setActivePage("home");
//   };

//   return (
//     <>
//       {/* Add spacer to prevent content from being hidden under the fixed header */}
//       <div className="h-8 md:h-10 w-full"></div>

//       <header
//         className={`fixed top-0 w-full py-3 px-4 md:px-12 flex items-center z-50 bg-yellow-50 bg-opacity-90 backdrop-blur-md shadow-md transition-all duration-300 ${
//           scrolled ? "py-2" : "py-3"
//         }`}
//       >
//         {/* Logo with click handler */}
//         <motion.div
//           className="flex-shrink-0 cursor-pointer"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           onClick={handleLogoClick}
//         >
//           <img
//             src="/Logo/logo.png"
//             alt="Fortex Innovation Logo"
//             className="h-8 md:h-10 lg:h-12 w-auto"
//           />
//         </motion.div>

//         {/* Desktop Navigation - Centered */}
//         <nav className="hidden md:flex flex-grow justify-center">
//           <ul className="flex items-center space-x-6 lg:space-x-8 text-black text-lg font-medium">
//             {navItems.map((item) => (
//               <motion.li
//                 key={item.id}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {console.log("ROOT", pathname, item.navigate)}
//                 <button
//                   onClick={() => router.push(`${item.navigate}`)}
//                   className={`cursor-pointer relative px-2 py-1 transition-colors duration-300 ${
//                     pathname == item.navigate
//                       ? "text-cyan-500"
//                       : "hover:text-cyan-300"
//                   }`}
//                 >
//                   {item.label}
//                   {activePage === item.id && (
//                     <motion.span
//                       className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 rounded-full"
//                       layoutId="activeNavIndicator"
//                     />
//                   )}
//                 </button>
//               </motion.li>
//             ))}
//           </ul>
//         </nav>

//         {/* Mobile Menu Button - Always visible and above the menu */}
//         <div className="md:hidden ml-auto">
//           <motion.button
//             className="text-black text-2xl focus:outline-none z-60 p-2 bg-yellow-50 bg-opacity-80 backdrop-blur-sm rounded-full fixed top-3 right-4"
//             onClick={() => setIsOpen(!isOpen)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {isOpen ? <FaTimes className="text-cyan-500" /> : <FaBars />}
//           </motion.button>
//         </div>

//         {/* Mobile Navigation - Full screen with all menu items */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               className="fixed inset-0 bg-yellow-50 bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center md:hidden z-40"
//               initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
//               animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
//               exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//             >
//               <motion.ul
//                 className="flex flex-col bg-yellow-50 items-center pt-60 py-8 text-black text-xl font-medium w-full px-6 mt-16"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   hidden: { opacity: 0 },
//                   visible: {
//                     opacity: 1,
//                     transition: {
//                       staggerChildren: 0.1,
//                       delayChildren: 0.2,
//                     },
//                   },
//                 }}
//               >
//                 {navItems.map((item) => (
//                   <motion.li
//                     key={item.id}
//                     variants={{
//                       hidden: { opacity: 0, y: 20 },
//                       visible: { opacity: 1, y: 0 },
//                     }}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-full"
//                   >
//                     <button
//                       onClick={() => {
//                         setActivePage(item.id);
//                         setIsOpen(false);
//                       }}
//                       className="cursor-pointer px-6 py-2 relative w-full text-center"
//                     >
//                       <span
//                         className={`relative z-10 ${
//                           activePage === item.id ? "text-cyan-500" : ""
//                         }`}
//                       >
//                         {item.label}
//                       </span>
//                       {activePage === item.id && (
//                         <motion.div
//                           className="absolute inset-0 bg-cyan-100 rounded-full -z-0"
//                           layoutId="mobileActiveNavIndicator"
//                         />
//                       )}
//                     </button>
//                   </motion.li>
//                 ))}
//               </motion.ul>

//               {/* Decorative elements */}
//               <motion.div
//                 className="absolute top-20 left-8 w-24 h-24 rounded-full bg-cyan-100 bg-opacity-50 -z-10"
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   rotate: [0, 45, 0],
//                   opacity: [0.3, 0.5, 0.3],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                 }}
//               />
//               <motion.div
//                 className="absolute bottom-20 right-8 w-32 h-32 rounded-full bg-cyan-200 bg-opacity-40 -z-10"
//                 animate={{
//                   scale: [1, 1.3, 1],
//                   rotate: [0, -45, 0],
//                   opacity: [0.2, 0.4, 0.2],
//                 }}
//                 transition={{
//                   duration: 10,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   delay: 1,
//                 }}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>
//     </>
//   );
// }



"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
        {/* Logo with Link */}
        <Link 
          href="/" 
          className="flex-shrink-0 cursor-pointer"
          onClick={() => setActivePage("home")}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/Logo/logo.png"
              alt="Fortex Innovation Logo"
              className="h-8 md:h-10 lg:h-12 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center space-x-6 lg:space-x-8 text-black text-lg font-medium">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.navigate}
                  onClick={() => setActivePage(item.id)}
                  className={`cursor-pointer relative px-2 py-1 transition-colors duration-300 ${
                    pathname === item.navigate
                      ? "text-cyan-500"
                      : "hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                  {activePage === item.id && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 rounded-full"
                      layoutId="activeNavIndicator"
                    />
                  )}
                </Link>
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
                    <Link
                      href={item.navigate}
                      onClick={() => {
                        setActivePage(item.id);
                        setIsOpen(false);
                      }}
                      className="cursor-pointer px-6 py-2 relative w-full flex justify-center"
                    >
                      <span
                        className={`relative z-10 ${
                          activePage === item.id ? "text-cyan-500" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                      {activePage === item.id && (
                        <motion.div
                          className="absolute inset-0 bg-cyan-100 rounded-full -z-0"
                          layoutId="mobileActiveNavIndicator"
                        />
                      )}
                    </Link>
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