import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex items-center justify-center space-x-4 py-4">
        <li>
          <Link to="/" className="text-white">
            Beranda
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white">
            Tentang
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
