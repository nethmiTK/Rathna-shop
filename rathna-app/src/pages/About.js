import { motion } from "framer-motion";
import logo from '../assets/images/New Rathna Traders.jpg';  // Replace with the correct path

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl font-bold text-center"
          >
            About New Rathna Traders
          </motion.h1>
        </div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center py-12 px-6 md:px-12"
      >
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Selling Fertilizer , chemicals & seeds🌱🌴🌻🌾
        </p> <br/>
      </motion.div>



      {/* Mission & Vision Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What do we sell?</h2>
          <p className="text-gray-600 leading-relaxed" style={{ textIndent: '20px' }}>
          We sell guaranteed fertilizers, vegetable seeds , agro chemicals & agriculture equipments.
          </p> <br/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">We Are</h2>
          <p className="text-gray-600 leading-relaxed">
          An agriculture shop in Sri Lanka is a retail outlet that provides farmers with various products and tools necessary for agricultural activities. <br/>
          Our shop cater to the needs of both small-scale and large-scale farmers, offering a wide range of agricultural supplies.
          Selling with responsibility.
          </p> <br/>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800">Join Us & Grow Your Cultivation</h2>
        <p className="text-lg text-gray-600 mt-4">
        
        All your growing needs under one roof As
        Your Agriculture Partner.
        
        </p> <br/>
      </motion.div>
    </div>
  );
}
