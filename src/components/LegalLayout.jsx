import { Link } from "react-router-dom";

/**
 * Shared shell for Privacy Policy / Terms & Conditions.
 * Navbar and Footer are already rendered once in App.jsx — this only
 * covers the hero + content area that's specific to legal pages.
 */
export default function LegalLayout({ title, heroImage, activeLabel, lastUpdated, children }) {
  return (
    <>
      <div className="legal-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(4,27,1,0.6)), url(${heroImage})` }}>
        <h1>{title}</h1>
        <div className="legal-breadcrumb">
          <i className="fa-solid fa-house"></i>
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="active">{activeLabel}</span>
        </div>
      </div>

      <div className="legal-content">
        {children}
        <p className="legal-last-updated">Last Updated: {lastUpdated}</p>
      </div>
    </>
  );
}
