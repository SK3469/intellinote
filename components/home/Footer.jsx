import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">IntelliNote AI</h2>
          <p className="text-sm text-gray-200">Crafted & Designed by <span className="font-bold">SunilMernstack</span></p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/SunilMernstack" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/SunilMernstack" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/SunilMernstack" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaTwitter size={24} />
          </a>
          <a href="mailto:support@intellinote.com" className="hover:scale-110 transition-transform">
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-200 mt-4 md:mt-0 text-center">
          © {new Date().getFullYear()} IntelliNote AI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
