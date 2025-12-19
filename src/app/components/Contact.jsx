"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5df4e2ec-c6b9-4165-aac4-2e9b6766ad3b",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log(result);
        setSubmitted(true);
        
        // Reset form after showing success message
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope />, text: "fortexinnovations01@gmail.com" },
    { icon: <FaPhone style={{ transform: "scaleX(-1)" }} />, text: "+91 9638985433" },
    { icon: <FaMapMarkerAlt />, text: "Vadodara, Gujarat, India" }
  ];

  const socialLinks = [
    { platform: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/fortex_inovations" },
    { platform: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/fortex-innovations" },
    // { platform: "Twitter", icon: <FaTwitter />, url: "https://twitter.com/fortexinnovation" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: "#3B82F6" }
  };

  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center bg-yellow-50 text-gray-800 py-30 overflow-hidden">
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
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 transform origin-left"></span>
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Have a project in mind? Looking to partner or work together? Reach out through the form below and we'll get back to you in no time.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg h-full border-t-4 border-blue-500"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <span className="text-blue-500 mr-2">📨</span>
                Connect With Us
              </h3>
              
              <div className="space-y-6 mt-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4" 
                    variants={itemVariants}
                  >
                    <div className="bg-blue-50 p-3 rounded-full text-blue-500">
                      {info.icon}
                    </div>
                    <p className="text-gray-700">{info.text}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-10"
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a 
                      key={index} 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-blue-50 hover:bg-blue-500 hover:text-white transition-colors duration-300 p-3 rounded-full text-blue-600"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.platform}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-teal-500"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <span className="text-teal-500 mr-2">📝</span>
                Send a Message
              </h3>
              
              {submitted ? (
                <motion.div 
                  className="bg-green-50 border border-green-500 p-6 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-5xl mb-4 text-green-500">✓</div>
                  <h4 className="text-xl font-bold text-green-600">Message Sent!</h4>
                  <p className="text-gray-700 mt-2">Thank you for reaching out. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-700 rounded-lg">
                      {error}
                    </div>
                  )}
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Your Name</label>
                      <motion.div className="relative" whileHover="focus" variants={inputVariants}>
                        <span className="absolute left-3 top-3 text-gray-500">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Isha parmar"
                          className="w-full p-3 pl-10 rounded-lg bg-blue-50 text-gray-800 border border-gray-200 focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </motion.div>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Your Email</label>
                      <motion.div className="relative" whileHover="focus" variants={inputVariants}>
                        <span className="absolute left-3 top-3 text-gray-500">
                          <FaEnvelope />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="isha@example.com"
                          className="w-full p-3 pl-10 rounded-lg bg-blue-50 text-gray-800 border border-gray-200 focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <motion.div className="mb-6" variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Your Message</label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="w-full p-3 rounded-lg bg-blue-50 text-gray-800 border border-gray-200 focus:outline-none focus:border-blue-500 transition-all"
                      whileHover="focus"
                      variants={inputVariants}
                    />
                  </motion.div>
                  
                  <motion.button
                    className="flex items-center justify-center gap-2 w-full p-3 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 rounded-lg font-medium text-white transition-all duration-300"
                    type="submit"
                    disabled={isSubmitting}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
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
