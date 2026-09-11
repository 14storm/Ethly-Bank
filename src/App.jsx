import { Routes, Route, useLocation } from "react-router-dom";
import DisclaimerBanner from "./components/DisclaimerBanner";
import Navbar from "./components/Navbar";
import ChatBot from "./components/ChatBot";

import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Cards from "./sections/Cards";
import Security from "./sections/Security";
import BrandStory from "./sections/BrandStory";
import HowItWorks from "./sections/HowItWorks";
import FinalCta from "./sections/FinalCta";
import Footer from "./sections/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotFound from "./pages/NotFound";

function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Security />
      <Cards />
      <HowItWorks />
      <BrandStory />
      <FinalCta />
      <Footer />
      <ChatBot />
    </>
  );
}

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="app">
      {!isAdminPage && <DisclaimerBanner />}
      {!isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
