import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#1CA3A3] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Container for Logo and Paragraph */}
        <div className="flex flex-col items-start">
          {/* Logo Text */}
          <h1 
            className="text-black"
            style={{ 
              fontSize: '71px',   // Font size
              fontWeight: 'bold',  // Font weight
              marginLeft: '135px',         // Reset margin
              opacity: '1'         // Opacity (set to 1 for visibility)
            }}
          >
            EaseText
          </h1>

          {/* Paragraph under the logo */}
          <p className="text-black" style={{ fontSize: '22px', marginTop: '-5px', marginLeft:'138px'}}> {/* Set font size to 20px and reduced margin */}
            Type The Text You'd Like Simplified.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-6 items-center" style={{ marginRight: '140px' }}> {/* Keep buttons in the same position */}
          <button
            onClick={() => alert('Login Clicked')} // Replace with actual login functionality
            style={{ height: '30px', padding: '0 16px', lineHeight: '30px', width: '90px',  }}
            className="bg-[#1CA3A3] text-white border border-white hover:bg-opacity-80 py-1 px-4 rounded-full transition duration-300"
          >
            Login
          </button>
          <button
            onClick={() => alert('Signup Clicked')} // Replace with actual signup functionality
            style={{ height: '30px', padding: '0 16px', lineHeight: '30px', width: '90px',  }}
            className="bg-[#1CA3A3] text-white border border-white hover:bg-opacity-80 py-1 px-4 rounded-full transition duration-300"
          >
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
