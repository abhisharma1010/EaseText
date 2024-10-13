import React from 'react';
import ContactPage from './ContactPage'; // Import the ContactPage component
import Img2 from '../Img2.png'; 

const SecondPage = () => {
  return (
    <div
      style={{
        width: '100%',                // Full width for the second page
        height: '100vh',              // Set the height to 100% of the viewport height (vh)
        backgroundColor: '#FFFFFF',   // Set the background color for the second page
        position: 'relative',         // Relative positioning for child elements
        top: '0px',                   // Remove any top gap
        margin: '0',                  // Remove default margin
        padding: '0',                 // Remove default padding
        overflow: 'hidden',           // Prevent content from overflowing
      }}
    >
      {/* First Colored Section with an Image */}
      <div
        style={{
          width: '667px',             // Width for the first colored portion
          height: '100%',             // Height of the first section will match the viewport height
          backgroundColor: '#14C3C3', // Background color
          position: 'relative',       // Position relative to the second page
          top: '0px',                 // Stick to the top of the second page
          left: '0px',                // Stick to the left edge
          margin: '0',                // No margin
          padding: '0',               // No padding
        }}
      >
        {/* Image on top of the first colored section */}
        <img
          src={Img2} // Use the imported variable for the source
          alt="Service-support"
          style={{
            width: '80%',              // Set the desired width for the image
            height: '80%',             // Maintain the aspect ratio of the image
            position: 'absolute',      // Position it absolutely within the colored section
            top: '50%',                // Vertically center the image
            left: '50%',               // Horizontally center the image
            transform: 'translate(-50%, -50%)', // Use transform to perfectly center
          }}
        />
      </div>

      {/* "Contact Us" Heading */}
      <h1
        style={{
          position: 'absolute',       // Absolute position within the second page
          top: '50px',                // Place the heading above the second colored section
          left: '67%',                // Adjust left position to align it with the second section
          fontSize: '40px',           // Set font size for the heading
          color: '#000',              // Set heading color
          margin: '0',                // No extra margin
          padding: '0',               // No padding
        }}
      >
        Contact Us
      </h1>

      {/* New Colored Section with Opacity */}
      <div
        style={{
          width: '550px',                // Set width for the new colored portion
          height: '500px',               // Set height for the new colored portion
          backgroundColor: '#36B8B880',  // Set background color with opacity
          position: 'absolute',          // Absolute position within the second page
          top: 'calc(50% - 200px)',      // Center vertically using calc (adjusted for heading spacing)
          left: 'calc(50% + 100px)',     // Adjust left position based on first section
          borderRadius: '45px',          // Set border-radius as specified
          opacity: 1,                    // Set opacity to 1 to make it visible
          marginTop: '-20px',             // No margin
          padding: '0',                  // No padding
          display: 'flex',               // Flex to center the contact form inside
          alignItems: 'center',          // Center align the form vertically
          justifyContent: 'center',      // Center align the form horizontally
        }}
      >
        {/* ContactPage Component inside the colored section */}
        <ContactPage />
      </div>

      {/* Footer Section */}
      <footer
        style={{
          width: '100%',                // Full width for the footer
          height: '60px',               // Set footer height
          backgroundColor: '#9FD2D5',   // Footer background color
          color: '#242626',                // Footer text color
          display: 'flex',              // Flexbox to center content
          justifyContent: 'center',     // Center content horizontally
          alignItems: 'center',         // Center content vertically
          position: 'absolute',         // Position it at the bottom
          bottom: '0',                  // Stick to the bottom
          left: '0',                    // Ensure it spans the width
          fontSize: '14px',             // Set font size for footer text
        }}
      >
        © 2024 EaseText. All rights reserved.
      </footer>
    </div>
  );
};

export default SecondPage;
