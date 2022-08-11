import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Feed />
      <Rightbar />
    </>
  );
};

export default Root;
