import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/detection-tools", text: "AI Detection" },
    { path: "/writing-analysis", text: "Writing Analysis" },
    { path: "/teaching-strategies", text: "Teaching Strategies" },
    { path: "/future-implications", text: "Future Implications" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="font-bold text-xl text-blue-600">
            AI in Education
          </Link>

          {/* Desktop Navigation */}
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-blue-600 transition-colors ${
                  isActive(link.path)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
