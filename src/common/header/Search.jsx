import React, { useState, useEffect } from 'react';
import logo from "../../components/assets/images/logo-site.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem, productItems, setSearchResults }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;

    // Lógica de filtro com base em CartItem e search
    const filteredResults = productItems.filter(item => {
      return item.Nome.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearch(searchTerm);
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    const handleScroll = () => {
      const searchElement = document.querySelector(".search");
      if (searchElement) {
        searchElement.classList.toggle("active", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Não é necessário adicionar search, CartItem ou setSearchResults como dependências aqui

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Buscar produto...' value={search} onChange={handleSearchChange} />
            <span></span>
          </div>

          <div className='icon f_flex width'>
            <div className='user'>
                <Link to='/user'>
                  <i className='fa fa-user icon-circle'></i>
                </Link>
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "0" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
