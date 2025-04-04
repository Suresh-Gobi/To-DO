import React from "react"; // Import the React library
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import routing components from react-router-dom

import Home from "./pages/Home"; // Import the Home component from the pages directory

// Main App component
export default function App() {
  return (
    // Wrap the application in a BrowserRouter to enable routing
    <BrowserRouter>
      {/* Define the routes for the application */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}