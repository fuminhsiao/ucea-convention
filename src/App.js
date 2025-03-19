import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import Hotel from "./pages/Hotel";
import Program from "./pages/Program";
import CallForProposals from "./pages/CallForProposals";
import GeneralSessions from "./pages/GeneralSessions";
import PresenterTips from "./pages/PresenterTips";
import AnnualBanquet from "./pages/AnnualBanquet";
import AwardsLuncheon from "./pages/AwardsLuncheon";
import Sponsorship from "./pages/Sponsorship";
import Exhibitor from "./pages/Exhibitor";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/program" element={<Program />} />
        <Route path="/cfp" element={<CallForProposals />} />
        <Route path="/general-sessions" element={<GeneralSessions />} />
        <Route path="/presenter-tips" element={<PresenterTips />} />
        <Route path="/annual-banquet" element={<AnnualBanquet />} />
        <Route path="/awards-luncheon" element={<AwardsLuncheon />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/exhibitor" element={<Exhibitor />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;