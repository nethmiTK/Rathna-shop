import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

// Include your image path here
import logo1 from '../assets/images/New Rathna Traders.jpg';  // Replace with the correct path
import logo2 from '../assets/images/20220919_133753~4.jpg';  // Replace with the correct path

function Header() {
  return (
    <header className="title bg-gray-800 p-4 text-white relative">
      {/* Left Section - Title */}
      <div className="text-left">
        <h1  style={{ fontSize: '30px' }} className="text-3xl font-bold">New Rathna Traders</h1>
        <h1 style={{ fontSize: '20px' }} className="font-normal">
          No:59, A/1, <br />
          Olcott Mawatha, <br />
          Galle. <br />
          Tel: 091 22 45 737
        </h1>
      </div>

      {/* Center Section - First Image */}
      <div className="text-center flex justify-center items-center flex-col">
        <img 
          src={logo1} 
          alt="New Rathna Traders Logo"
          className="mb-3"
          style={{ width: '250.6px', height: '250.6px' }}
        />
      </div>

      {/* Center Section - Second Image */}
      <div className="text-center flex justify-center items-center flex-col">
        <img 
          src={logo2} 
          alt="New Rathna Traders Logo"
          className="mb-3"
          style={{ width: '250.6px', height: '250.6px' }}
        />
      </div> <br/>

      {/* Right Section - Contact Us and Social Media */}
      <div className="absolute top-0 right-0 mt-6 mr-6 text-right">
        
        <div className="flex space-x-6 mt-2 justify-center">
          {/* Facebook Link with Highlight and Pop-Up */}
          <a 
            href="https://www.facebook.com/p/New-Rathna-Traders-100082497764157/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center text-2xl hover:text-gray-300"
          >
            <FaFacebook className="highlight-icon" style={{ color: '#1877F2' }} /> {/* Blue Facebook Icon */}
            <span className="text-sm mt-1">New Rathna Traders</span>
          </a>

          {/* WhatsApp Link with Highlight and Pop-Up */}
          <a 
            href="https://wa.me/94756727739" // Updated with the correct Sri Lankan WhatsApp number
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center text-2xl hover:text-gray-300"
          >
            <FaWhatsapp className="highlight-icon" style={{ color: '#25D366' }} /> {/* Green WhatsApp Icon */}
            <span className="text-sm mt-1">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
