import React from 'react';
import Navbar from './Navbar'; // Ensure correct path to Navbar component
import Img1 from '../Img1.png'; // Importing Img1 from the src folder

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: '#1CA3A3', // Background color
        position: 'relative', // Positioning for child elements
        width: '98.9vw', // Set to full viewport width
        height: '100vh', // Set to full viewport height
        display: 'flex',
        flexDirection: 'column', // Allow for vertical stacking
        overflow: 'hidden', // Prevents scrolling
      }}
    >
      <Navbar /> {/* Include Navbar component */}

      <img
        src={Img1} // Use the imported variable for the source
        alt="Background"
        style={{
          width: '70%', // Adjust width to fit within the viewport
          height: '70%', // Adjust height to maintain aspect ratio
          position: 'absolute', // Positioning to overlay the background
          top: '15%', // Adjust positioning based on new sizes
          left: '15%', // Center the image within the viewport
          opacity: 1, // Set opacity to 1 to make it visible
          zIndex: 0, // Set a lower z-index for the background image
          objectFit: 'contain', // Ensures the image is contained within the box and doesn't stretch
        }}
      />

      {/* Textarea for multi-line input with padding */}
      <div style={{ position: 'absolute', width: '35%', height: '45%', top: '30%', left: '10%', zIndex: 1 }}>
        <textarea
          placeholder="Type here..." // Placeholder text
          style={{
            width: '100%', // Take full width of the parent div
            height: '100%', // Take full height of the parent div
            borderRadius: '54px', // Set border-radius
            opacity: 1, // Set opacity to 1 to make it visible
            border: '2px solid white', // Add a border (optional)
            padding: '20px', // Add padding around the text for all sides
            fontSize: '22px', // Font size for the input text
            outline: 'none', // Remove default outline
            textAlign: 'left', // Ensure text aligns left horizontally
            lineHeight: '1.2', // Adjust line height
            resize: 'none', // Prevent the textarea from being resized by the user
            overflowY: 'auto', // Add a scroll bar if the content exceeds the height
            zIndex: 2, // Set a higher z-index to bring the input box above everything else
            position: 'relative', // Relative position for proper stacking
          }}
        />

        {/* Button to paste text */}
        <button
          style={{
            position: 'absolute', // Positioning inside the container
            bottom: '10px', // Adjust distance from the bottom
            right: '30px', // Adjust distance from the right (moved left by ~38 pixels)
            backgroundColor: '#15918D', // Button color
            color: 'white', // Button text color
            border: 'none', // Remove border
            borderRadius: '10px', // Round button edges
            padding: '5px 10px', // Smaller padding for a smaller button
            fontSize: '14px', // Smaller font size for button text
            cursor: 'pointer', // Change cursor on hover
            zIndex: 2, // Ensure button is above the image and textarea
          }}
          onClick={() => {
            console.log('Paste button clicked');
          }}
        >
          Paste Text
        </button>
      </div>

      {/* Second input field styled similarly to the textarea */}
      <textarea
        type="text"
        placeholder="Type here..." // Placeholder text
        style={{
          width: '35%', // Set percentage width for responsiveness
          height: '45%', // Set percentage height
          position: 'absolute', // Positioning to overlay
          top: '30%', // Center vertically
          left: '55%', // Adjust position for second box
          borderRadius: '54px', // Set border-radius
          opacity: 1, // Set opacity to 1 to make it visible
          zIndex: 2, // Set a higher z-index to bring the input box above everything else
          border: '2px solid white', // Add a border (optional)
          padding: '20px', // Add padding around the text for all sides
          fontSize: '22px', // Font size for the input text
          outline: 'none', // Remove default outline
          textAlign: 'left', // Ensure text aligns left horizontally
          lineHeight: '1.2', // Adjust line height for consistency
        }}
      />

      {/* "Simplify" button placed in the center of the page */}
      <button
        style={{
          position: 'absolute', // Absolute positioning to center the button
          top: '50%', // Vertically center (adjust as needed)
          left: '50%', // Horizontally center
          transform: 'translate(-50%, -50%)', // Correct centering by adjusting the position
          backgroundColor: '#15918D', // Button color
          color: 'white', // Button text color
          border: 'none', // Remove border
          borderRadius: '10px', // Round button edges
          padding: '5px 10px', // Same padding as the "Paste Text" button
          fontSize: '14px', // Same font size as the "Paste Text" button
          cursor: 'pointer', // Change cursor on hover
          zIndex: 3, // Ensure the button appears on top
        }}
        onClick={() => {
          console.log('Simplify button clicked');
        }}
      >
        Simplify
      </button>
    </div>
  );
};

export default Home;
