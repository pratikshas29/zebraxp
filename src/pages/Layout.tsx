import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Toaster } from "react-hot-toast";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col bg-white min-h-screen relative">
      <Toaster position="top-right" />
      <Header />
      <main className="flex-1 ">{children ?? <Outlet />}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
