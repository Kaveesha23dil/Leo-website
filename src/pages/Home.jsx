import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Navbar from "../sections/Navbar";
import HeroSection from "../sections/HeroSection";
import LeoClub from "../sections/LeoClub"; // ✅ make sure file name matches case
import LegacySection from "../sections/LegacySection";
import StatsSection from "../sections/StatsSection";
import SplashCursor from "../sections/SplashCursor";
import LeadershipSection from "../sections/LeadershipSection";
import LatestProjects from "../sections/LatestProjects";
import Footer from "../components/Footer";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loading
        variant="bouncy-text"
        fullscreen
        text="Welcome to LEO Club of SLTC"
        fontSize="2rem"
      />
    );
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <LeoClub />
      <LegacySection />
      <StatsSection />
      <SplashCursor />
      <LeadershipSection />
      <LatestProjects />
      <Footer />
    </>
  );
}

export default Home;
