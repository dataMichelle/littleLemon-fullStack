import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import lemonLogo from "@assets/logos/lemon.png";

const Footer = () => (
  <footer className="bg-primary-green text-white py-10">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo */}
      <div className="flex flex-col items-start">
        <img
          src={lemonLogo}
          alt="Little Lemon"
          className="w-16 h-auto mb-2 ml-10"
        />
        <span className="text-2xl font-bold">Little Lemon</span>
      </div>

      {/* Nav links */}
      <nav aria-label="Footer Navigation">
        <ul className="space-y-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Address */}
      <address className="not-italic space-y-1">
        <div>123 Little Lemon Way</div>
        <div>Chicago, IL 73945</div>
        <a href="tel:123-456-7890" className="block">
          123-456-7890
        </a>
        <a href="mailto:info@littlelemon.com" className="block">
          info@littlelemon.com
        </a>
      </address>

      {/* Socials */}
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="text-primary-yellow text-2xl" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-primary-yellow text-2xl" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-primary-yellow text-2xl" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
