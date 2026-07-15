import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ModalProvider } from "./context/ModalContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import GetStartedModal from "./components/GetStartedModal.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import Home from "./pages/Home.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ModalProvider>
      <ScrollToTopOnNavigate />

      {/* One Navbar, reused on every page */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>

      {/* One Footer, reused on every page */}
      <Footer />

      {/* One modal instance, opened from any page via ModalContext */}
      <GetStartedModal />

      <ScrollToTopButton />
    </ModalProvider>
  );
}
