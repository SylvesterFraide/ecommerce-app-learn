import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col  sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to="/">
            <h3 className="">Logo</h3>
            <p className="w-full md:w-2/3 text-gray-600">
              Subscribe to our newsletter for the latest updates
            </p>
          </Link>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1">
            <li>+2 123 456 7890</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>

      {/* <div className="border-t border-gray-200 py-10 text-center text-sm">
        <p>© 2025 Your Company. All rights reserved.</p>
      </div> */}

      <div>
        <hr />
       <p className="text-center text-sm py-5"> © 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
