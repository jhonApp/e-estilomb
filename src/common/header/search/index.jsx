import React, { useState, useEffect } from 'react';
import Logo from "./logo"
import SearchBox from "./searchBox"
import UserMenu from "./userMenu"
import Cart from "./cart"

const Search = ({ CartItem }) => {
  const [userData, setUserData] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      const searchElement = document.querySelector(".search");
      if (searchElement) {
        searchElement.classList.toggle("active", window.scrollY > 100);
      }
    };

    const userDataString = getCookie('userData');
    if (userDataString) {
      const parsedUserData = JSON.parse(userDataString);
      setUserData(parsedUserData);
    }
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className='search'>
        <div className='container flex justify-between'>
          <Logo />
          <SearchBox />
          <div className='icon flex w-1/4 items-center justify-end'>
            <div className='user flex items-center'>
              <UserMenu userData={userData} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
            <Cart CartItem={CartItem} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
