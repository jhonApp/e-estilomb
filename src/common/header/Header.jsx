import React, { useState } from "react"
import "./Header.css"
import Head from "./head/index"
import Search from "./search/index"
import Navbar from "./navbar/index"

const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
    </>
  );
};



export default Header
