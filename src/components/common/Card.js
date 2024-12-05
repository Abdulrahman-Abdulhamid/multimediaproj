import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, content, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{content}</p>
        <div className="mt-4 text-blue-600 hover:text-blue-800">
          Learn more →
        </div>
      </div>
    </Link>
  );
};

export default Card;
