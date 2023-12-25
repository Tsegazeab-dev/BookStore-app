import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const BackButton = ({ destination = "/" }) => {
  return (
    <div >
      <Link
        to={destination}
        className="p-4"
      >
        <FaArrowCircleLeft className="text-3xl" />
      </Link>
    </div>
  );
};

export default BackButton;
