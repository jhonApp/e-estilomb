import React, { useState } from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, productItems, searchResults, setSearchResults }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} productItems={productItems} searchResults={searchResults} setSearchResults={setSearchResults} />
      <Navbar />
    </>
  );
};



export default Header
