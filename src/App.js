import React from 'react';
import Home from './components/Home';         // Import the Home component
import SecondPage from './components/SecondPage'; // Import the SecondPage component

function App() {
  return (
    <div>
      <Home />        {/* Render the Home component */}
      <SecondPage />  {/* Render the SecondPage component */}
    </div>
  );
}

export default App;
