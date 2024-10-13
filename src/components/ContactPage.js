import React from 'react';

const ContactPage = () => {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: '20px', // Add padding to prevent content from touching the edges
        boxSizing: 'border-box', // Ensure padding is included in the width/height
      }}
    >
      {/* Name Section */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '15px', width: '100%' }}>
        <label
          style={{
            width: '150px',                // Fixed width for the label
            fontSize: '22px',
            textAlign: 'left',             // Align text to the left
            marginRight: '10px',           // Right margin to separate label and input
            color: '#000',                 // Black text color for label
          }}
        >
          Name
        </label>
        <input
          type="text"
          style={{
            flex: 1,                       // Allow input to fill remaining space
            height: '51px',                // Keep the height consistent
            padding: '0px',                // Padding for the input
            marginBottom: '15px',          // Space below input
            borderRadius: '71px',          // Same as Name section
            border: '1px solid #FFFFFF',   // Same as Name section
            backgroundColor: '#099C8A',    // Same as Name section
            color: '#000',                 // Same as Name section
          }}
        />
      </div>

      {/* Phone Section */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '15px', width: '100%' }}>
        <label
          style={{
            fontSize: '22px',
            width: '150px',
            textAlign: 'left',             // Align text to the left
            marginRight: '10px',           // Right margin to separate label and input
            color: '#000',
          }}
        >
          Phone
        </label>
        <input
          type="tel"
          style={{
            flex: 1,                       // Allow input to fill remaining space
            height: '51px',                // Same height as Name section
            padding: '0px',                // Same padding as Name section
            marginBottom: '15px',          // Space below input
            borderRadius: '71px',          // Same as Name section
            border: '1px solid #FFFFFF',   // Same as Name section
            backgroundColor: '#099C8A',    // Same as Name section
            color: '#000',                 // Same as Name section
          }}
        />
      </div>

      {/* E-mail Section */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '15px', width: '100%' }}>
        <label
          style={{
            fontSize: '22px',
            width: '150px',
            textAlign: 'left',             // Align text to the left
            marginRight: '10px',           // Right margin to separate label and input
            color: '#000',
          }}
        >
          E-mail
        </label>
        <input
          type="email"
          style={{
            flex: 1,                       // Allow input to fill remaining space
            height: '51px',                // Same height as Name section
            padding: '0px',                // Same padding as Name section
            marginBottom: '15px',          // Space below input
            borderRadius: '71px',          // Same as Name section
            border: '1px solid #FFFFFF',   // Same as Name section
            backgroundColor: '#099C8A',    // Same as Name section
            color: '#000',                 // Same as Name section
          }}
        />
      </div>

      {/* Message Section */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '15px', width: '100%' }}>
        <label
          style={{
            fontSize: '22px',
            width: '150px',
            textAlign: 'left',             // Align text to the left
            marginRight: '10px',           // Right margin to separate label and input
            color: '#000',
          }}
        >
          Message
        </label>
        <textarea
          rows="5"
          style={{
            flex: 1,                       // Allow textarea to fill remaining space
            height: '150px',
            padding: '15px',
            borderRadius: '30px',
            border: '1px solid #FFFFFF',
            backgroundColor: '#099C8A',
            color: '#000',
          }}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          marginTop: '20px',
          height: '30px',
          padding: '0px 30px',
          backgroundColor: '#099C8A',
          color: '#fff',
          border: 'none',
          borderRadius: '71px',
          cursor: 'pointer',
          margin: '0px 0px 0px 160px', // [top] [right] [bottom] [left]
        }}
      >
        Send
      </button>
    </form>
  );
};

export default ContactPage;
