import React, { useState, useEffect } from "react";
import Loading from "./components/Loading"; 
import Navbar from "./sections/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return <Loading variant="bouncy-text" fullscreen text="Welcome  to  LEO  Club  of  SLTC" fontSize="2rem" />;
  }

  return (
    <Navbar />
  );
}

export default App;
