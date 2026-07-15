import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-col">
          <div className="footer-brand-logo">
            <img src="/images/images/logo.svg" alt="Diraa" />
          </div>
          <p className="footer-brand-desc">
            Next-generation cybersecurity solutions powered by AI. Protecting modern
            infrastructure from zero-day threats.
          </p>
          <div className="footer-socials">
            <a id="fb" href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a id="insta" href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a id="linkedin" href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a id="twtr" href="#" aria-label="Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <i className="fa-regular fa-envelope"></i>
              <span>deeeplenz.sales@3pillars-sa.com</span>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Riyadh, Saudi Arabia</span>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Cairo, Egypt</span>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Peshawar, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Part of */}
        <div className="footer-col">
          <h4>Part of</h4>
          <div className="footer-partof">
            <a
              className="partof-logo"
              href="https://deeplenz.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/images/deepblack.png" alt="DeepLenz" className="partof-img" />
            </a>
            <a
              className="partof-logo"
              href="https://www.3pillars-sa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/images/3p-logob.png"
                alt="Three Pillars"
                className="partof-img partof-img--wide"
              />
            </a>
            <p className="footer-partof-desc">
              Diraa is a product of Deeplenz AI, a subsidiary of 3Pillars Digitalization.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Diraa. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
