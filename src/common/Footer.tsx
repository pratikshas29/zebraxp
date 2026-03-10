import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
// @ts-ignore
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      // className="flex flex-col items-stretch bg-footerBg pt-7 gap-5"
    >
      {/* <div className="max-w-7xl mx-auto w-full px-4 md:px-6 flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-4">
        
        <Link to="/" className="no-underline flex justify-center md:block w-full md:w-auto">
          <img
            src={logo}
            className="w-28 h-10 object-contain mx-auto md:mx-0"
          />
        </Link>

        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 md:gap-x-9 md:ml-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "nav-link-active" : "nav-link"}`
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/offering"
            className={({ isActive }) =>
              `${isActive ? "nav-link-active" : "nav-link"}`
            }
          >
            Offerings
          </NavLink>

          <NavLink
            to="/tenets"
            className={({ isActive }) =>
              `${isActive ? "nav-link-active" : "nav-link"}`
            }
          >
            Tenets
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `${isActive ? "nav-link-active" : "nav-link"}`
            }
          >
            About
          </NavLink>
        </div>
      </div> */}

      <div className="w-full bg-footerBg border-t border-solid border-[#0000001A]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          
          <span className="text-grayText text-xs order-2 md:order-1">
            Copyright © 2025 Zebra XP Pvt. Ltd.
          </span>

          <span className="text-grayText text-xs order-1 md:order-2">
            Investor Relations  |   Terms & Conditions
          </span>

        </div>
      </div>
    </motion.div>
  );
};

export default Footer;