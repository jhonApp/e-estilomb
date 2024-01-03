import React, { useState } from "react"
import "./Header.css"
import Head from "./head/index"
import Search from "./search/index"
import Navbar from "./navbar/index"

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
