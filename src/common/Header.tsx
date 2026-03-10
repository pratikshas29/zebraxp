import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
// @ts-ignore
import logo from "../assets/logo.png";
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleReachUsClick = () => {
    const n = "919999999999";
    const text = encodeURIComponent("Hello! I would like to connect.");
    const url = `https://wa.me/${n}?text=${text}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full bg-white fixed top-0 right-0 left-0 py-3 z-50"
        style={{
          boxShadow: "0px 6px 12px #00000012",
        }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.3 }} whileHover={{ scale: 1.02 }}>
            <Link to="/" className="no-underline">
              <img
                src={logo}
                className="w-40 h-14 object-fill"
              />
            </Link>
          </motion.div>
          <motion.div
            className="hidden lg:flex shrink-0 items-center flex-wrap gap-4 md:gap-0"
            initial="hidden"
            animate="show"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link-header mr-6 md:mr-11 transition-colors duration-200 hover:text-brandPurple hover:opacity-80 ${isActive ? "nav-link-header-active" : ""}`
              }
              end
            >
              {"Home"}
            </NavLink>
            <NavLink
              to="/offering"
              className={({ isActive }) =>
                `nav-link-header mr-6 md:mr-10 transition-colors duration-200 hover:text-brandPurple hover:opacity-80 ${isActive ? "nav-link-header-active" : ""}`
              }
            >
              {"Offerings"}
            </NavLink>
            <NavLink
              to="/tenets"
              className={({ isActive }) =>
                `nav-link-header mr-6 md:mr-11 transition-colors duration-200 hover:text-brandPurple hover:opacity-80 ${isActive ? "nav-link-header-active" : ""}`
              }
            >
              {"Tenets"}
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `nav-link-header transition-colors duration-200 hover:text-brandPurple hover:opacity-80 ${isActive ? "nav-link-header-active" : ""}`
              }
            >
              {"About Us"}
            </NavLink>
          </motion.div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden lg:flex flex-col items-start bg-brandPurple text-left py-2 px-6 md:px-8 rounded-full border-0"
              onClick={handleReachUsClick}
            >
              <span className="text-white text-lg">
                <span className="inline-flex items-center gap-2">
                 {"Reach Us"}    <FaWhatsapp className="w-5 h-5" />
               
                </span>
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open menu"
              className="lg:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setOpen(true)}
            >
              <FiMenu size={22} className="text-[#0D0035]" />
            </motion.button>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 h-screen w-72 sm:w-80 bg-white z-[61] shadow-2xl flex flex-col"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <Link to="/" onClick={() => setOpen(false)} className="transition-opacity hover:opacity-90">
                  <img src={logo} className="h-10 w-auto object-contain" />
                </Link>
                <button
                  aria-label="Close menu"
                  className="p-2 rounded-full hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  <FiX size={20} className="text-[#0D0035]" />
                </button>
              </div>
              <nav className="p-3 overflow-y-auto">
                <div className="flex flex-col">
                  <NavLink
                    to="/"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-[15px] transition-colors duration-200 hover:text-brandPurple ${isActive ? "bg-gray-100 nav-link-header-active" : "hover:bg-gray-50"}`
                    }
                    end
                  >
                    {"Home"}
                  </NavLink>
                  <NavLink
                    to="/offering"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-[15px] transition-colors duration-200 hover:text-brandPurple ${isActive ? "bg-gray-100 nav-link-header-active" : "hover:bg-gray-50"}`
                    }
                  >
                    {"Offerings"}
                  </NavLink>
                  <NavLink
                    to="/tenets"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-[15px] transition-colors duration-200 hover:text-brandPurple ${isActive ? "bg-gray-100 nav-link-header-active" : "hover:bg-gray-50"}`
                    }
                  >
                    {"Tenets"}
                  </NavLink>
                  <NavLink
                    to="/about-us"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-[15px] transition-colors duration-200 hover:text-brandPurple ${isActive ? "bg-gray-100 nav-link-header-active" : "hover:bg-gray-50"}`
                    }
                  >
                    {"About Us"}
                  </NavLink>
                </div>
              </nav>
              <div className="p-4 border-t">
                <button
                  className="w-full bg-brandPurple text-white py-3 px-6 rounded-full"
                  onClick={() => {
                    setOpen(false);
                    handleReachUsClick();
                  }}
                >
                  <span className="inline-flex items-center justify-center gap-2">
                   {"Reach Us"}   <FaWhatsapp className="w-5 h-5" />
                  
                  </span>
                </button>
              </div>
              <div className="flex-1" />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

