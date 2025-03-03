import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Include your image path here
import logo1 from '../assets/images/New Rathna Traders.jpg';  // Replace with the correct path
import logo2 from '../assets/images/20220919_133753~4.jpg';  // Replace with the correct path


function Header() {
  return (
    <header className="title bg-gray-800 p-4 text-white relative">
      {/* Left Section - Title */}
      <div className="text-left">
        <h1 className="text-3xl font-bold">New Rathna Traders</h1>
        <h1 style={{ fontSize: '20px' }} className="font-normal">
           No:59,A/1, <br />
           Olcott Mawatha, <br />
           Galle. <br />
           Tel : 091 22 45 737
        </h1>



      </div>

      {/* Center Section - Image */}
      <div className="text-center flex justify-center items-center flex-col">
        {/* Centered Image */}
        <img 
          src={logo1}  // Use the imported logo image
          alt="New Rathna Traders Logo"
          className="mb-3"  // Margin-bottom for spacing
          style={{ width: '250.6px', height: '250.6px' }} // Set image size to 2cm by 2cm (approximately 75.6px)
        />
      </div>


      {/* Center Section - Image */}
      <div className="text-center flex justify-center items-center flex-col">
        {/* Centered Image */}
        <img 
          src={logo2}  // Use the imported logo image
          alt="New Rathna Traders Logo"
          className="mb-3"  // Margin-bottom for spacing
          style={{ width: '250.6px', height: '250.6px' }} // Set image size to 2cm by 2cm (approximately 75.6px)
        />
      </div>


      {/* Right Section - Contact Us and Social Media */}
      <div className="absolute top-0 right-0 mt-6 mr-6 text-right"> {/* Position to top right */}
        <p className="text-lg font-semibold">Contact Us:</p>
        <div className="flex space-x-6 mt-2 justify-center">
          <a 
            href="https://www.facebook.com/p/New-Rathna-Traders-100082497764157/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center text-white text-2xl hover:text-gray-300"
          >
            <FaFacebook />
            <span className="text-sm mt-1">New Rathna Traders</span>
          </a>
          {/* You can add more social icons here if needed */}
        </div>
      </div>
    </header>
  );
}

export default Header;
