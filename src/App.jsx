import { Routes, Route } from "react-router-dom";
import DisclaimerBanner from "./components/DisclaimerBanner";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Cards from "./sections/Cards";
import BrandStory from "./sections/BrandStory";
import HowItWorks from "./sections/HowItWorks";
import FinalCta from "./sections/FinalCta";
import Footer from "./sections/Footer";
import ChatBot from "./components/ChatBot";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Security from "./sections/Security";

function Home() {
  return (
    <>
      <DisclaimerBanner />
      <Hero />
      <Features />
      <Security />
      <Cards />
      <BrandStory />
      {/* <HowItWorks /> */}
      <FinalCta />
      <Footer />
      <ChatBot />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <DisclaimerBanner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* <Footer />
      <ChatBot /> */}
    </div>
  );
}

export default App;
